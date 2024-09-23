import { AuthLayout } from "@/components/Layout";
import { LoginForm, OtherActions } from "@/features/login/components";
import React from "react";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
  const { t } = useTranslation(["login"]);

  return (
    <AuthLayout title={t("login_acc")} otherActions={<OtherActions />}>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginScreen;
