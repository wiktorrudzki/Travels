import React from "react";
import PrimaryButton from "./PrimaryButton";
import { Href, useRouter } from "expo-router";

type Props = {
  href: Href<string | object>;
  text: string;
};

const PrimaryLinkButton = ({ href, text }: Props) => {
  const router = useRouter();

  return <PrimaryButton onPress={() => router.push(href)} text={text} />;
};

export default PrimaryLinkButton;
