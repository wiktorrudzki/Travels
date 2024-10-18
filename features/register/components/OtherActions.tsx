import { UnsignedLinkButton } from "@/components/Button";
import { Text } from "@/components/Text";
import React from "react";
import { useTranslation } from "react-i18next";

const OtherActions = () => {
  const { t } = useTranslation(["common", "register"]);

  return (
    <>
      <Text text={t("register:already_have_acc")} />
      <UnsignedLinkButton
        uppercased
        text={t("common:log_in")}
        href={{ screen: "login" }}
      />
    </>
  );
};

export default OtherActions;
