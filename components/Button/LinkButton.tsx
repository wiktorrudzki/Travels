import { COLORS } from "@/constants/colors";
import { Text } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "../Link";
import { Href } from "expo-router";

type Props = {
  text: string;
  href: Href<object | string>;
  uppercased?: boolean;
};

const LinkButton = ({ text, href, uppercased }: Props) => {
  return (
    <Link href={href}>
      <TouchableOpacity>
        <Text
          textTransform={uppercased ? "uppercase" : "initial"}
          color="primary.400"
        >
          {text}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default LinkButton;
