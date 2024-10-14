import { api } from "@/api";

export const getTrips = () => api.get("/trip");
