import { RootStackSignedInPropsList } from "./routes";

export type Tab = {
  title: string;
  to: keyof RootStackSignedInPropsList;
};
