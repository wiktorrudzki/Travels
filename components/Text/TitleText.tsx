import React from "react";
import Text from "./Text";

type Props = React.ComponentPropsWithRef<typeof Text> & {
  text: string;
};

const TitleText = ({ text }: Props) => (
  <Text lineHeight="sm" textAlign="center" fontSize="2xl" bold text={text} />
);

export default TitleText;
