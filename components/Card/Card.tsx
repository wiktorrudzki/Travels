import { View } from "native-base";
import React from "react";

type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
};

const Card = ({
  children,
  height = "full",
  width = "full",
  ...rest
}: Props) => (
  <View
    background="white"
    shadow="1"
    rounded="3xl"
    padding="8"
    width={width}
    height={height}
    {...rest}
  >
    {children}
  </View>
);

export default Card;
