import React, { useState } from "react";
import { Button } from "native-base";
import PrimaryButton from "./PrimaryButton";

type Props = Omit<React.ComponentPropsWithRef<typeof Button>, "color"> & {
  text: string;
  onPress: () => Promise<unknown>;
};

const PrimaryAsynchronousButton = ({ text, onPress, ...rest }: Props) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <PrimaryButton
      onPress={() => {
        setDisabled(true);
        onPress().finally(() => setDisabled(false));
      }}
      disabled={disabled}
      text={text}
      {...rest}
    />
  );
};

export default PrimaryAsynchronousButton;
