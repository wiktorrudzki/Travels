import { api } from "@/api";
import {
  CreateEventRequest,
  EditEventRequest,
  Event,
  EventWithTrip,
} from "@/types/event";

export const createEvent = (body: CreateEventRequest, chatMessage?: string) =>
  api
    .post<Event>("/event", body)
    .then((res) => ({ ...res, data: { ...res.data, chatMessage } }));

export const editEvent = ({ id, ...rest }: EditEventRequest) =>
  api.patch<Event>(`/event/${id}`, rest);

export const getEvent = (id: string) => api.get<EventWithTrip>(`/event/${id}`);

export const deleteEvent = (id: string) => api.delete<string>(`event/${id}`);
