import { api } from "@/api";
import { Trip } from "@/types/trip";

export const getTrips = () => api.get<Trip[]>("/trip");
