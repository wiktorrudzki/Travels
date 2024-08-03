import React from "react";
import { Button } from "native-base";
import { Text } from "../Text";
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

type Props = Omit<React.ComponentPropsWithRef<typeof Button>, "color"> & {
  text: string;
};

const PrimaryButton = ({ text, ...rest }: Props) => (
  <Button
    opacity={rest.disabled ? 0.6 : 1}
    rounded="3xl"
    color="primary.400"
    size="lg"
    {...rest}
  >
    <Text style={styles.text} text={text}></Text>
  </Button>
);

const styles = StyleSheet.create({
  text: {
    color: COLORS.buttonText,
  },
});

export default PrimaryButton;
