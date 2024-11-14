import { RouteProp } from "@react-navigation/native";
import { Event } from "./event";
import { FlightQuery } from "./flight";
import { TripWithEvents } from "./trip";

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

export type Conversation = {
  role: "system" | "user" | "assistant";
  content: string;
}[];

export type ConversationContextType = {
  trip?: TripWithEvents;
  conversation: Conversation;
  sendMessage: (message: string) => void;
};

export type ChatRouteWithId = RouteProp<{
  chat: {
    id?: string;
  };
}>;
