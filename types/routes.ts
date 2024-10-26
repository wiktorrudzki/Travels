export type RootStackSignedInPropsList = {
  account: undefined;
  home: undefined;
  trips: undefined;
  trip: { id: string };
  "trip/edit": { id: string };
  "trip/create-event": { id: string };
  "trip/edit-event": { id: string };
  "qr-code": undefined;
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
