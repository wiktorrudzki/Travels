import { Text } from "@/components/Text";
import React from "react";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation("welcome");

  return (
    <Text text={t("description")} textAlign="center" bold color="text.300" />
  );
};

export default Description;
