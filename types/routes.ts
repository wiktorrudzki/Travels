export type StaticRoutes = {
  welcome: "/";
  login: "/login";
  register: "/register";
  account: "/account";
  home: "/home";
  trips: "/trips";
  notFound: "not-found";
};

export type DynamicRoutes = {
  trip: (id: string) => `/trip/${typeof id}`;
};

export type Routes = StaticRoutes & DynamicRoutes;

export type RouteValues =
  | StaticRoutes[keyof StaticRoutes]
  | ReturnType<DynamicRoutes[keyof DynamicRoutes]>;
