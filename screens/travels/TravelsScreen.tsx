import { PrimaryLinkButton } from "@/components/Button";
import { AuthorizedLayout } from "@/components/Layout";
import { ROUTES } from "@/constants/routes";
import React from "react";

const TravelsScreen = () => (
  <AuthorizedLayout>
    <PrimaryLinkButton text="Home" href={ROUTES.travels} />
  </AuthorizedLayout>
);

export default TravelsScreen;
