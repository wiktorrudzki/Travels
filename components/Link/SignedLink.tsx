import { RootStackSignedInPropsList } from "@/types/routes";
import { Link } from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import React from "react";

type Props = {
  children: React.ReactNode;
  to: To<RootStackSignedInPropsList>;
  props?: React.ComponentProps<typeof Link>;
};

const SignedLink = ({ to, children, props }: Props) => (
  <Link to={to} {...props}>
    {children}
  </Link>
);

export default SignedLink;
