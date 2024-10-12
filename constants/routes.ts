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
    title: "general",
    tabs: [
      {
        title: "account",
        href: ROUTES.home,
      },
      {
        title: "change_password",
        href: ROUTES.travels,
      },
    ],
  },
  {
    title: "friends",
    tabs: [
      {
        title: "friends_list",
        href: ROUTES.home,
      },
      {
        title: "add_friend",
        href: ROUTES.home,
      },
    ],
  },
];
