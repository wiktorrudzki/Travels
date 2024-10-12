import { logout } from "@/dal/auth";
import { useAuth, usePromise } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { useTranslation } from "react-i18next";

const useLogout = () => {
  const { logout: logoutFromApp } = useAuth();

  const { t } = useTranslation("account");

  const onSuccessLogout = () => {
    toaster({ variant: "success", text: t("logout_success") });
    logoutFromApp();
  };

  const [logoutRequest] = usePromise(logout, onSuccessLogout, (e) =>
    toaster({ text: e, variant: "danger" })
  );

  return { logout: logoutRequest };
};

export default useLogout;
