import { UnauthorizedLayout } from "@/components/Layout";
import { LoginForm, OtherActions } from "@/features/login/components";
import React from "react";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
  const { t } = useTranslation(["login"]);

  return (
    <UnauthorizedLayout title={t("login_acc")} otherActions={<OtherActions />}>
      <LoginForm />
    </UnauthorizedLayout>
  );
};

export default LoginScreen;
