export type StaticRoutes = {
  welcome: "/";
  login: "/login";
  register: "/register";
  account: "/account";
  home: "/home";
  trips: "/trips";
};

export type DynamicRoutes = {
  trip: (id: string) => `/trip/${typeof id}`;
};

export type Routes = StaticRoutes & DynamicRoutes;

export type RouteValues =
  | Routes[keyof StaticRoutes]
  | ReturnType<DynamicRoutes["trip"]>;
