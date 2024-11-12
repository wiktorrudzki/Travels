export type FlightQuery = {
  departure_airport?: string;
  arrival_airport?: string;
  max_price?: string;
  page?: string;
  page_size?: string;
  departure_before?: string;
  departure_after?: string;
  arrival_before?: string;
  arrival_after?: string;
};

export type Flight = {
  id: number;
  departure_airport: string;
  arrival_airport: string;
  departure_datetime: string;
  arrival_datetime: string;
  price: number;
  link: string;
  airline: string;
  flight_number: string;
};
