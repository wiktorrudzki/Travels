import { AuthContextType } from "@/types/auth";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import usePromise from "./usePromise";
import { verifySession } from "@/dal/auth";
import { TWENTY_SECONDS } from "@/constants/time";
import { toaster } from "@/lib/native-base";
import { useTranslation } from "react-i18next";
import { AxiosResponseHeaders } from "axios";
import { decocdeAuthorizationHeader } from "@/utils/jwt";

const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isSignedIn, setIsSignedIn] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation("common");

  const loginToApp = () => {
    setIsSignedIn("true");
  };

  const logoutFromApp = async () =>
    SecureStore.deleteItemAsync("Authorization")
      .then(() => setIsSignedIn("false"))
      .catch((e) => {
        console.log(e);
      });

  const successfullAuth = () => {
    setLoading(false);
    loginToApp();
  };

  const failureAuth = () => {
    logoutFromApp();
    setLoading(false);
  };

  const failureVerify = () => {
    toaster({ text: t("session_expired"), variant: "danger" });
    logoutFromApp();
  };

  const [verifyAuthorization] = usePromise(
    verifySession,
    successfullAuth,
    failureAuth
  );

  const [checkSession] = usePromise(verifySession, undefined, failureVerify);

  useEffect(() => {
    verifyAuthorization();
  }, []);

  const login = useCallback((_: unknown, headers: AxiosResponseHeaders) => {
    SecureStore.setItemAsync(
      "Authorization",
      decocdeAuthorizationHeader(headers.get("Authorization"))
    ).then(loginToApp);
  }, []);

  const logout = useCallback(
    () => SecureStore.deleteItemAsync("Authorization").then(logoutFromApp),
    []
  );

  const isLoggedIn = useMemo(
    () => Boolean(isSignedIn && isSignedIn === "true"),
    [isSignedIn]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isLoggedIn) {
      interval = setInterval(() => {
        checkSession();
      }, TWENTY_SECONDS);
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isLoggedIn]);

  const value = {
    isLoggedIn,
    login,
    logout,
  };

  if (loading) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Cannot use useAuth without provider");
  }

  return context;
};
