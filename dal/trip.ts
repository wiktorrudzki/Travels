import { api } from "@/api";
import { EditTripRequest, Trip, TripWithEvents } from "@/types/trip";

export const getTrips = () => api.get<Trip[]>("/trip");

export const getTripWithEvents = (id: string, day?: string) =>
  day
    ? api.get<TripWithEvents>(`/trip/with-events/${id}?Day=${day}`)
    : api.get<TripWithEvents>(`/trip/with-events/${id}`);

export const getTrip = (id: string) => api.get<Trip>(`/trip/${id}`);

export const deleteTrip = (id: string) => api.delete<string>(`/trip/${id}`);

export const editTrip = ({ id, ...rest }: EditTripRequest) =>
  api.patch<TripWithEvents>(`/trip/${id}`, rest);
