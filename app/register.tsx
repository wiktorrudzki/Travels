import { LinkButton, PrimaryLinkButton } from "@/components/Button";
import { AuthLayout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { RegisterForm } from "@/features/register/components";
import React from "react";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation(["common", "register"]);

  return (
    <AuthLayout
      title={t("register:registration")}
      Form={<RegisterForm />}
      OtherActions={
        <>
          <Text text={t("register:already_have_acc")} />
          <LinkButton uppercased text={t("common:log_in")} href="/login" />
        </>
      }
    />
  );
};

export default Register;
