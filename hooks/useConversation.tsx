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
  TripResponse,
} from "@/types/chat";
import { TripWithEvents } from "@/types/trip";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import OpenAI from "openai";
import {
  MODEL,
  SYSTEM_MESSAGE,
  SYSTEM_MESSAGE_TRIP_INFO,
  SYSTEM_MESSAGE_V2,
} from "@/constants/chat";
import {
  addUserMessageToConversation,
  concatWithSystemMessage,
  isValidJSON,
} from "@/lib/openai/helpers";
import React from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, ScrollView } from "react-native";
import { toaster } from "@/lib/native-base";

const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

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
  const [modifyTrip] = usePromise(editTrip, setTrip);
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
        ? SYSTEM_MESSAGE_V2
        : SYSTEM_MESSAGE_V2 + SYSTEM_MESSAGE_TRIP_INFO + trip,
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

    // TODO musze w odpowiednim momencie wysyłać czat przy tworzeniu wyjazdu i przy edycji moze tez by sie przydalo cos zmienic
    openai.chat.completions
      .create({
        model: MODEL,
        max_tokens: 1000,
        temperature: 0,
        messages: concatWithSystemMessage(
          addUserMessageToConversation(conversation, message),
          systemMessage
        ),
      })
      .then(async (completion) => {
        const response = completion.choices[0].message.content;

        const responseJSON = isValidJSON<TripResponse>(response);

        if (responseJSON && "type" in responseJSON) {
          planTrip(
            {
              ...responseJSON.data,
              participants: [],
            },
            responseJSON.message
          );
        } else {
          onChatResponse(response);
        }
      });
  };

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
