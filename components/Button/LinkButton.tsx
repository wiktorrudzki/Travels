import React from "react";
import { Link } from "../Link";
import { Href } from "expo-router";
import { Text } from "../Text";

type Props = {
  text: string;
  href: Href<object | string>;
  uppercased?: boolean;
};

const LinkButton = ({ text, href, uppercased }: Props) => (
  <Link href={href}>
    <Text
      text={text}
      textTransform={uppercased ? "uppercase" : "initial"}
      color="primary.600"
    />
  </Link>
);

export default LinkButton;
