import { LoadingSpinner } from "@/components/Spinner";
import {
  createTrip,
  editTrip,
  getTripChat,
  getTripWithEvents,
  updateTripChat,
} from "@/dal/trip";
import { usePromise, usePromiseWithLoading } from "@/hooks";
import {
  Conversation,
  ConversationContextType,
  Message,
  Response,
} from "@/types/chat";
import { TripWithEvents } from "@/types/trip";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PLANNED_TRIP_SYSTEM_MESSAGE, SYSTEM_MESSAGE } from "@/constants/chat";
import {
  addUserMessageToConversation,
  concatWithSystemMessage,
  createCompletion,
  extractMessage,
  generateResponseWithRag,
  isValidJSON,
  removeAfterLastDash,
} from "@/lib/openai/helpers";
import { useTranslation } from "react-i18next";
import { Keyboard, ScrollView } from "react-native";
import { toaster } from "@/lib/native-base";
import { createEvent } from "@/dal/event";

const ConversationContext = createContext<ConversationContextType | null>(null);

type Props = {
  children: React.ReactNode;
  tripId?: string;
  defaultConversation?: Conversation;
};

const ConversationProvider = ({
  children,
  tripId,
  defaultConversation,
}: Props) => {
  const [conversation, setConversation] = useState<Conversation>(
    defaultConversation ?? []
  );
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);

  const [trip, setTrip] = useState<TripWithEvents>();

  const [planTrip] = usePromise(
    createTrip,
    (data) => {
      setTrip(data);
      onChatResponse(data.chatMessage, data?.id);
    },
    (err) => {
      toaster({ text: err, variant: "danger" });
      onChatResponse();
    }
  );
  // const [modifyTrip] = usePromise(editTrip, setTrip);
  const [addEvent] = usePromise(
    createEvent,
    (data) => {
      setTrip(
        (prev) =>
          ({ ...prev, events: prev?.events.concat(data) } as TripWithEvents)
      );
      onChatResponse(data.chatMessage, data?.id);
    },
    (err) => {
      toaster({ text: err, variant: "danger" });
      onChatResponse();
    }
  );
  const [updateChat] = usePromise(updateTripChat);
  const [getChat] = usePromise(
    getTripChat,
    (data) => {
      const chat = isValidJSON<Conversation>(data);

      if (chat) {
        setConversation(chat);
      }
    },
    (err) => toaster({ text: err, variant: "danger" })
  );
  const [get, isLoading, runBefore] = usePromiseWithLoading(
    getTripWithEvents,
    (data) => {
      setTrip(data);
    }
  );

  const scrollViewRef = useRef<ScrollView | null>(null);

  const { t } = useTranslation("trips");

  const systemMessage = useMemo(
    () =>
      trip !== undefined
        ? PLANNED_TRIP_SYSTEM_MESSAGE + JSON.stringify(trip)
        : SYSTEM_MESSAGE,
    [trip]
  );

  useEffect(() => {
    if (tripId) {
      get(tripId);
      getChat(tripId);
    }

    Keyboard.addListener("keyboardDidShow", scrollToEnd);
  }, []);

  useEffect(() => {});

  const scrollToEnd = useCallback(
    () => scrollViewRef.current?.scrollToEnd({ animated: true }),
    [scrollViewRef]
  );

  const addMessage = (message: Message, tripId?: string) =>
    setConversation((prev) => {
      const newConversation = prev.concat(message);

      if (trip) updateChat(trip?.id ?? tripId, JSON.stringify(newConversation));

      if (tripId) updateChat(tripId, JSON.stringify(newConversation));

      return newConversation;
    });

  const sendMessage = async (message: string) => {
    Keyboard.dismiss();
    addMessage({ role: "user", content: message });
    setIsLoadingResponse(true);
    scrollToEnd();

    createCompletion(generateCompletionMessages(message))
      .then(async (completion) => {
        const response = extractMessage(completion);

        console.log(response);

        if (response?.includes("search")) {
          const ragResponse = await generateResponseWithRag(
            removeAfterLastDash(response)
          );

          createCompletion(
            generateCompletionMessages(
              `Pytanie od użytkownika: ${message}. Wyniki wyszukiwania na pytanie: ${response}: ${JSON.stringify(
                ragResponse
              )}`
            )
          ).then((completion) => {
            const response = extractMessage(completion);

            onChatResponse(response);
          });
        } else {
          const responseJSON = isValidJSON<Response>(
            response?.substring(response.indexOf("{"))
          );

          if (responseJSON && "type" in responseJSON) {
            handleJSONResponse(responseJSON);
          } else {
            onChatResponse(response);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleJSONResponse = (response: Response) => {
    switch (response.type) {
      case "trip":
        return planTrip(
          {
            ...response.data,
            participants: [],
          },
          response.message
        );
      case "event":
        return addEvent(
          {
            ...response.data,
            start: new Date(response.data.start),
            end: new Date(response.data.end),
          },
          response.message
        );
    }
  };

  const generateCompletionMessages = (message: string) =>
    concatWithSystemMessage(
      addUserMessageToConversation(conversation, message),
      systemMessage
    );

  const onChatResponse = (response?: string | null, tripId?: string) => {
    scrollToEnd();
    setIsLoadingResponse(false);
    addMessage(
      {
        role: "assistant",
        content: response ?? t("no_chat_response"),
      },
      tripId
    );
  };

  const value: ConversationContextType = useMemo(
    () => ({
      trip,
      conversation,
      isLoadingResponse,
      scrollViewRef,
      sendMessage,
    }),
    [trip, conversation, isLoadingResponse, scrollViewRef, sendMessage]
  );

  if ((isLoading || !runBefore) && tripId !== undefined) {
    return <LoadingSpinner />;
  }

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};

const useConversation = () => {
  const context = useContext(ConversationContext);

  if (!context) {
    throw new Error("Cannot use useConversation without provider");
  }

  return context;
};

export { ConversationProvider, useConversation };
