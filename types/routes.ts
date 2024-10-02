export type Routes = {
  welcome: "/";
  login: "/login";
  register: "/register";
  account: "/account";
  home: "/home";
  travels: "/travels";
  trip: (id: string) => `/trip/${typeof id}`;
};

export type RouteValues = Routes[keyof Routes] | ReturnType<Routes["trip"]>;
