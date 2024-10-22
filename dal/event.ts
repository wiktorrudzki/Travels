import { api } from "@/api";
import {
  CreateEventRequest,
  EditEventRequest,
  Event,
  EventWithTrip,
} from "@/types/event";

export const createEvent = (body: CreateEventRequest) =>
  api.post<Event>("/event", body);

export const editEvent = ({ id, ...rest }: EditEventRequest) =>
  api.patch<Event>(`/event/${id}`, rest);

export const getEvent = (id: string) => api.get<EventWithTrip>(`/event/${id}`);

export const deleteEvent = (id: string) => api.delete<string>(`event/${id}`);
