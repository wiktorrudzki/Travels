import { flightsApi } from "@/api";
import { FlightQuery } from "@/types/flight";

export const getFlights = (params: FlightQuery) =>
  flightsApi.get("/flights", {
    params,
  });
