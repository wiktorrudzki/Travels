import { AuthLayout } from "@/components/Layout";
import { OtherActions } from "@/features/login/components";
import { RegisterForm } from "@/features/register/components";
import React from "react";
import { useTranslation } from "react-i18next";

const RegisterScreen = () => {
  const { t } = useTranslation("register");

  return (
    <AuthLayout title={t("registration")} otherActions={<OtherActions />}>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterScreen;
