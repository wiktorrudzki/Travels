import { Tab } from "@/types/account";

export const ACCOUNT_TABS: { title: string; tabs: Tab[] }[] = [
  {
    title: "general",
    tabs: [
      // {
      //   title: "account",
      //   to: "home",
      // },
      {
        title: "change_password",
        to: "change-password",
      },
    ],
  },
  // {
  //   title: "friends",
  //   tabs: [
  //     {
  //       title: "friends_list",
  //       to: "home",
  //     },
  //     {
  //       title: "add_friend",
  //       to: "home",
  //     },
  //   ],
  // },
];
