import { Text } from "native-base";
import React from "react";
import { Link } from "../Link";
import { Href } from "expo-router";

type Props = {
  text: string;
  href: Href<object | string>;
  uppercased?: boolean;
};

const LinkButton = ({ text, href, uppercased }: Props) => (
  <Link href={href}>
    <Text
      textTransform={uppercased ? "uppercase" : "initial"}
      color="primary.600"
    >
      {text}
    </Text>
  </Link>
);

export default LinkButton;
