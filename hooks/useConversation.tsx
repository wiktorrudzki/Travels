import { LoadingSpinner } from "@/components/Spinner";
import { getTripWithEvents } from "@/dal/trip";
import { usePromiseWithLoading, useSignedInNavigation } from "@/hooks";
import { Conversation, ConversationContextType } from "@/types/chat";
import { TripWithEvents } from "@/types/trip";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import OpenAI from "openai";
import { MODEL } from "@/constants/chat";
import { addUserMessageToConversation } from "@/lib/openai/helpers";

const openai = new OpenAI({
  apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
});

const ConversationContext = createContext<ConversationContextType | null>(null);

type Props = {
  children: React.ReactNode;
  tripId?: string;
  defaultConversation?: Conversation;
};

const ConversationProvider = async ({
  children,
  tripId,
  defaultConversation,
}: Props) => {
  const [conversation, setConversation] = useState<Conversation>(
    defaultConversation ?? []
  );
  const [trip, setTrip] = useState<TripWithEvents>();

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
  }, []);

  const sendMessage = useCallback(
    () => async (message: string) => {
      const completion = await openai.chat.completions.create({
        model: MODEL,
        max_tokens: 6,
        temperature: 0,
        messages: addUserMessageToConversation(conversation, message),
      });

      console.log(completion);

      return completion.choices[0].message;
    },
    []
  );

  if (isLoading || !runBefore) {
    return <LoadingSpinner />;
  }

  const value: ConversationContextType = {
    trip,
    conversation,
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
