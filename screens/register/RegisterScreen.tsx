import { UnauthorizedLayout } from "@/components/Layout";
import { OtherActions, RegisterForm } from "@/features/register/components";
import React from "react";
import { useTranslation } from "react-i18next";

const RegisterScreen = () => {
  const { t } = useTranslation("register");

  return (
    <UnauthorizedLayout
      title={t("registration")}
      otherActions={<OtherActions />}
    >
      <RegisterForm />
    </UnauthorizedLayout>
  );
};

export default RegisterScreen;
