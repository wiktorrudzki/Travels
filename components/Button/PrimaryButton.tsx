import React from "react";
import { Button } from "native-base";
import { Text } from "../Text";
import { StyleSheet } from "react-native";
import { DISABLED } from "@/constants/styles";
import { COLORS } from "@/constants/colors";

type Props = Omit<React.ComponentPropsWithRef<typeof Button>, "color"> & {
  text: string;
};

const PrimaryButton = ({ text, ...rest }: Props) => (
  <Button
    opacity={rest.disabled ? DISABLED : 1}
    rounded="3xl"
    backgroundColor="primary.400"
    size="lg"
    {...rest}
  >
    <Text style={styles.text} text={text} />
  </Button>
);

const styles = StyleSheet.create({
  text: {
    color: COLORS.buttonText,
  },
});

export default PrimaryButton;
