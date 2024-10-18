export type RootStackSignedInPropsList = {
  account: undefined;
  home: undefined;
  trips: undefined;
  trip: { id: string };
  "*": undefined;
  "+not-found": undefined;
};

export type RootStackUnsignedInPropsList = {
  "*": undefined;
  "+not-found": undefined;
  login: undefined;
  register: undefined;
  welcome: undefined;
};
