import { TripsProvider } from "@/features/trips/hooks";
import { TripsScreen } from "@/screens/trips";
import React from "react";

const Trips = () => (
  <TripsProvider>
    <TripsScreen />
  </TripsProvider>
);

export default Trips;
