import React, { useState } from "react";
import { Button } from "native-base";
import PrimaryButton from "./PrimaryButton";

type Props = Omit<React.ComponentPropsWithRef<typeof Button>, "color"> & {
  text: string;
  onPress: () => Promise<unknown>;
};

const PrimaryAsynchronousButton = ({ text, onPress, ...rest }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PrimaryButton
      onPress={() => {
        setIsLoading(true);
        onPress().finally(() => setIsLoading(false));
      }}
      isLoading={isLoading}
      text={text}
      {...rest}
    />
  );
};

export default PrimaryAsynchronousButton;
