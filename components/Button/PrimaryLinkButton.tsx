import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "@/hooks";
import { RouteValues } from "@/types/routes";

type Props = {
  href: RouteValues;
  text: string;
  replace?: boolean;
};

const PrimaryLinkButton = ({ href, text, replace }: Props) => {
  const { replace: replaceRoute, push } = useRouter();

  return (
    <PrimaryButton
      onPress={() => (replace ? replaceRoute(href) : push(href))}
      text={text}
    />
  );
};

export default PrimaryLinkButton;
