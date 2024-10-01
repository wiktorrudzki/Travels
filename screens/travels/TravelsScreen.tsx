import { PrimaryLinkButton } from "@/components/Button";
import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { ROUTES } from "@/constants/routes";
import React from "react";
import { useTranslation } from "react-i18next";

const TravelsScreen = () => {
  const { t } = useTranslation();

  return (
    <AuthorizedLayout>
      <PrimaryLinkButton text="Home" href={ROUTES.travels} />
    </AuthorizedLayout>
  );
};

export default TravelsScreen;
