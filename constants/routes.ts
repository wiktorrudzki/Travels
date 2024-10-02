import { Routes } from "@/types/routes";

export const ROUTES: Routes = {
  welcome: "/",
  login: "/login",
  register: "/register",
  travels: "/travels",
  home: "/home",
  account: "/account",
  trip: (id: string) => `/trip/${id}`,
};
