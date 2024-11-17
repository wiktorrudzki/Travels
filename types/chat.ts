import { RouteProp } from "@react-navigation/native";
import { Event } from "./event";
import { FlightQuery } from "./flight";
import { TripWithEvents } from "./trip";
import { ChatCompletionMessageParam } from "openai/resources";
import { ScrollView } from "react-native";
import { MutableRefObject } from "react";

export type Response =
  | OneWayFlightResponse
  | TwoWayFlightResponse
  | TripResponse
  | EventResponse;

export type OneWayFlightResponse = {
  type: "one-way-flight";
  data: FlightQuery;
  message: string;
};

export type TwoWayFlightResponse = {
  type: "two-way-flight";
  data: FlightQuery & {
    duration: number[];
  };
  message: string;
};

export type TripResponse = {
  type: "trip";
  data: TripWithEvents;
  message: string;
};

export type EventResponse = {
  type: "event";
  data: Event;
  message: string;
};

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type Conversation = Message[];

export type ConversationContextType = {
  trip?: TripWithEvents;
  conversation: Conversation;
  isLoadingResponse: boolean;
  scrollViewRef: MutableRefObject<ScrollView | null>;
  sendMessage: (message: string) => void;
};

export type ChatRouteWithId = RouteProp<{
  chat: {
    id?: string;
  };
}>;
