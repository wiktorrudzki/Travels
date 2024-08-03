import { Text } from "native-base";
import React from "react";

type Props = React.ComponentPropsWithRef<typeof Text> & {
  text: string;
};

const TextComponent = ({ text, ...rest }: Props) => (
  <Text {...rest}>{text}</Text>
);

export default TextComponent;
