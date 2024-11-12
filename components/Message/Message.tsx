import React from "react";
import { View } from "../View";
import { Text } from "../Text";
import { StyleSheet } from "react-native";
import { ROUNDED } from "@/constants/styles";

type Props = {
  variant: "chatbot" | "user";
  text: string;
};

const Message = ({ text, variant }: Props) => (
  <View>
    <Text text={text} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...ROUNDED,
  },
});

export default Message;
