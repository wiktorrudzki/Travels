import { LinkButton } from "@/components/Button";
import { Text } from "@/components/Text";
import { ROUTES } from "@/constants/routes";
import React from "react";
import { useTranslation } from "react-i18next";

const OtherActions = () => {
  const { t } = useTranslation(["common", "register"]);

  return (
    <>
      <Text text={t("register:already_have_acc")} />
      <LinkButton uppercased text={t("common:log_in")} href={ROUTES.login} />
    </>
  );
};

export default OtherActions;
