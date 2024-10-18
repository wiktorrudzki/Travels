import React from "react";
import { SignedLink } from "../Link";
import { Text } from "../Text";
import { useTheme } from "native-base";
import { RootStackSignedInPropsList } from "@/types/routes";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";

type Props = {
  text: string;
  href: To<RootStackSignedInPropsList>;
  uppercased?: boolean;
};

const SignedLinkButton = ({ text, href, uppercased }: Props) => {
  const { colors } = useTheme();

  return (
    <SignedLink to={href}>
      <Text
        text={text}
        textTransform={uppercased ? "uppercase" : "initial"}
        color={colors.primary[600]}
      />
    </SignedLink>
  );
};

export default SignedLinkButton;
