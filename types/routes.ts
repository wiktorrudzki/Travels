export type Routes = {
  welcome: "/";
  login: "/login";
  register: "/register";
  account: "/account";
  home: "/home";
  travels: "/travels";
};

export type RouteValues = Routes[keyof Routes];
