import React from "react";
import { UnsignedLink } from "../Link";
import { Text } from "../Text";
import { useTheme } from "native-base";
import { RootStackUnsignedInPropsList } from "@/types/routes";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";

type Props = {
  text: string;
  href: To<RootStackUnsignedInPropsList>;
  uppercased?: boolean;
};

const UnsignedLinkButton = ({ text, href, uppercased }: Props) => {
  const { colors } = useTheme();

  return (
    <UnsignedLink to={href}>
      <Text
        text={text}
        textTransform={uppercased ? "uppercase" : "initial"}
        color={colors.primary[600]}
      />
    </UnsignedLink>
  );
};

export default UnsignedLinkButton;
