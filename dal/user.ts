import { api } from "@/api";
import { Participant } from "@/types/trip";

export const getFriends = () => api.get<Participant[]>("/user/trip-friends");
