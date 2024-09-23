import { LinkButton } from "@/components/Button";
import { Text } from "@/components/Text";
import React from "react";
import { useTranslation } from "react-i18next";

const OtherActions = () => {
  const { t } = useTranslation(["common", "login"]);

  return (
    <>
      <Text text={t("login:dont_have_acc")} />
      <LinkButton uppercased text={t("common:register_now")} href="/register" />
    </>
  );
};

export default OtherActions;
