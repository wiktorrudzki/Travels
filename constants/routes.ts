import { Tab } from "@/types/account";
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

export const ACCOUNT_TABS = [
  {
    title: "General",
    tabs: [
      {
        title: "Account",
        href: ROUTES.home,
      },
      {
        title: "Change password",
        href: ROUTES.travels,
      },
    ],
  },
];
