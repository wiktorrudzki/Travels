import { Href, Link as LinkComponent } from "expo-router";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: Href<string | object>;
  linkProps?: React.ComponentProps<typeof LinkComponent>;
};

const Link = ({ href, children, linkProps }: Props) => (
  <LinkComponent push href={href} {...linkProps} asChild>
    {children}
  </LinkComponent>
);

export default Link;
