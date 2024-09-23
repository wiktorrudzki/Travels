import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "@/hooks";
import { RouteValues } from "@/types/routes";

type Props = {
  href: RouteValues;
  text: string;
};

const PrimaryLinkButton = ({ href, text }: Props) => {
  const { router } = useRouter();

  return <PrimaryButton onPress={() => router.push(href)} text={text} />;
};

export default PrimaryLinkButton;
