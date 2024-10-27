import React from "react";
import { Button, useTheme } from "native-base";
import { Text } from "../Text";
import { DISABLED } from "@/constants/styles";

type Props = Omit<React.ComponentPropsWithRef<typeof Button>, "color"> & {
  text: string;
};

const SecondaryButton = ({ text, ...rest }: Props) => {
  const { colors } = useTheme();

  return (
    <Button
      opacity={rest.disabled ? DISABLED : 1}
      rounded="3xl"
      borderColor={colors.primary[400]}
      backgroundColor="transparent"
      borderWidth={2}
      size="lg"
      {...rest}
    >
      <Text color={colors.primary[400]} text={text} />
    </Button>
  );
};

export default SecondaryButton;
