import { UnsignedLinkButton } from "@/components/Button";
import { Text } from "@/components/Text";
import React from "react";
import { useTranslation } from "react-i18next";

const OtherActions = () => {
  const { t } = useTranslation(["common", "login"]);

  return (
    <>
      <Text text={t("login:dont_have_acc")} />
      <UnsignedLinkButton
        uppercased
        text={t("common:register_now")}
        href={{ screen: "register" }}
      />
    </>
  );
};

export default OtherActions;
