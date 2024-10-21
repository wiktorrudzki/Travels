import { useSignedInNavigation } from "@/hooks";
import { RootStackSignedInPropsList } from "@/types/routes";
import { Link as LinkComponent } from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import React from "react";

type Props = {
  children: React.ReactNode;
  to: To<RootStackSignedInPropsList>;
  props?: React.ComponentProps<typeof LinkComponent>;
};

const SignedLink = ({ to, children, props }: Props) => (
  <LinkComponent to={to} {...props}>
    {children}
  </LinkComponent>
);

export default SignedLink;
