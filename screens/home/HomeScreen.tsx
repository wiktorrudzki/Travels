import { PrimaryButton, PrimaryLinkButton } from "@/components/Button";
import { AuthorizedLayout } from "@/components/Layout";
import { ROUTES } from "@/constants/routes";
import { logout } from "@/dal/auth";
import { useAuth, usePromise } from "@/hooks";
import React from "react";

const HomeScreen = () => {
  const { logout: logoutFromApp } = useAuth();

  const [logoutRequest] = usePromise(logout, logoutFromApp);

  return (
    <AuthorizedLayout>
      <PrimaryLinkButton text="Home" href={ROUTES.trips} />
      <PrimaryButton text="logout" onPress={logoutRequest} />
    </AuthorizedLayout>
  );
};
export default HomeScreen;

// TODO DODAĆ WALIDACJĘ TOKENA W ATRYBUCIE AUTHORIZE NA BACKENDZIE, PRZENIEŚC PRZYCISK DO WYLOGOWANIA DO ZAKŁADKI /ACCOUNT
