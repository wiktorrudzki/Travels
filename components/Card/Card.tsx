import React from "react";
import { View } from "../View";
import { useTheme } from "native-base";

type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
};

const Card = ({
  children,
  height = "full",
  width = "full",
  ...rest
}: Props) => {
  const { colors } = useTheme();

  return (
    <View
      background={colors.white}
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
};
export default Card;
