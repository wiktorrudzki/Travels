import { LoadingSpinner } from "@/components/Spinner";
import { createTrip, getTripWithEvents } from "@/dal/trip";
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
} from "@/constants/chat";
import {
  addUserMessageToConversation,
  concatWithSystemMessage,
  isValidJSON,
} from "@/lib/openai/helpers";
import React from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, ScrollView } from "react-native";

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

  const [awaitingResponse, setAwaitingResponse] = useState<string>();

  const onSuccessPlan = useCallback(() => {
    onChatResponse(awaitingResponse);
    setAwaitingResponse(undefined);
  }, [awaitingResponse]);

  const [planTrip] = usePromise(createTrip, onSuccessPlan);

  const scrollViewRef = useRef<ScrollView | null>(null);

  const { t } = useTranslation("trips");

  const [trip, setTrip] = useState<TripWithEvents>();

  const systemMessage = useMemo(
    () =>
      trip !== undefined
        ? SYSTEM_MESSAGE
        : SYSTEM_MESSAGE + SYSTEM_MESSAGE_TRIP_INFO + trip,
    [trip]
  );

  const [get, isLoading, runBefore] = usePromiseWithLoading(
    getTripWithEvents,
    (data) => {
      setTrip(data);
    }
  );

  useEffect(() => {
    if (tripId) {
      get(tripId);
    }

    Keyboard.addListener("keyboardDidShow", scrollToEnd);
  }, []);

  const scrollToEnd = useCallback(
    () => scrollViewRef.current?.scrollToEnd({ animated: true }),
    [scrollViewRef]
  );

  const addMessage = (message: Message) =>
    setConversation((prev) => prev.concat(message));

  const sendMessage = async (message: string) => {
    Keyboard.dismiss();
    addMessage({ role: "user", content: message });
    setIsLoadingResponse(true);
    scrollToEnd();

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

        console.log(response);

        const responseJSON = isValidJSON<TripResponse>(response);

        if (responseJSON && "type" in responseJSON) {
          setAwaitingResponse(responseJSON.message);
          planTrip({ ...responseJSON.data, participants: [] });
        } else {
          onChatResponse(response);
        }
      });
  };

  const onChatResponse = (response?: string | null) => {
    scrollToEnd();
    setIsLoadingResponse(false);
    addMessage({
      role: "assistant",
      content: response || t("no_chat_response"),
    });
  };

  if ((isLoading || !runBefore) && tripId !== undefined) {
    return <LoadingSpinner />;
  }

  const value: ConversationContextType = {
    trip,
    conversation,
    isLoadingResponse,
    scrollViewRef,
    sendMessage,
  };

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
