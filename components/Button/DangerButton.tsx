import React from "react";
import { Button, useTheme } from "native-base";
import { Text } from "../Text";
import { DISABLED } from "@/constants/styles";

type Props = Omit<React.ComponentPropsWithRef<typeof Button>, "color"> & {
  text: string;
};

const DangerButton = ({ text, ...rest }: Props) => {
  const { colors } = useTheme();

  return (
    <Button
      opacity={rest.disabled ? DISABLED : 1}
      rounded="3xl"
      backgroundColor={colors.error[500]}
      size="lg"
      {...rest}
    >
      <Text color={colors.white} text={text} />
    </Button>
  );
};

export default DangerButton;
