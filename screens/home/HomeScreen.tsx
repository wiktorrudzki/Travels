import { PrimaryButton } from "@/components/Button";
import { AuthorizedLayout } from "@/components/Layout";
import { logout } from "@/dal/auth";
import { useAuth, usePromise, useSignedInNavigation } from "@/hooks";
import React from "react";

const HomeScreen = () => {
  const { logout: logoutFromApp } = useAuth();

  const [logoutRequest] = usePromise(logout, logoutFromApp);

  const { push } = useSignedInNavigation();

  return (
    <AuthorizedLayout>
      <PrimaryButton text="Home" onPress={() => push("home")} />
      <PrimaryButton text="logout" onPress={logoutRequest} />
    </AuthorizedLayout>
  );
};
export default HomeScreen;
