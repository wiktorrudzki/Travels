import { api } from "@/api";
import { CreateEventRequest, Event } from "@/types/event";

export const createEvent = (body: CreateEventRequest) =>
  api.post<Event>("/event", body);
