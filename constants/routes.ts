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
        to: "home",
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
