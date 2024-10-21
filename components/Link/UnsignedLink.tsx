import { RootStackUnsignedInPropsList } from "@/types/routes";
import { Link } from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import React from "react";

type Props = {
  children: React.ReactNode;
  to: To<RootStackUnsignedInPropsList>;
  props?: React.ComponentProps<typeof Link>;
};

const UnsignedLink = ({ to, children, props }: Props) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default UnsignedLink;
