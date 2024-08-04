import { LinkButton } from "@/components/Button";
import { AuthLayout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { LoginForm } from "@/features/login";
import React from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation(["common", "login"]);

  return (
    <AuthLayout
      title={t("login:login_acc")}
      Form={<LoginForm />}
      OtherActions={
        <>
          <Text text={t("login:dont_have_acc")} />
          <LinkButton
            uppercased
            text={t("common:register_now")}
            href="/register"
          />
        </>
      }
    />
  );
};

export default Login;
