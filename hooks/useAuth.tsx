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
import useRouter from "./useRouter";
import { ROUTES } from "@/constants/routes";
import usePromise from "./usePromise";
import { verifySession } from "@/dal/auth";

const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isSignedIn, setIsSignedIn] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { replace } = useRouter();

  const loginToApp = () => {
    setIsSignedIn("true");
    replace(ROUTES.home);
  };

  const logoutFromApp = () => {
    setIsSignedIn("false");
  };

  const successfullAuth = () => {
    setLoading(false);
    loginToApp();
  };

  const failureAuth = () => {
    setIsSignedIn("false");
    setLoading(false);
  };

  const [verifyAuthorization] = usePromise(
    verifySession,
    successfullAuth,
    failureAuth
  );

  useEffect(() => {
    verifyAuthorization();
  }, []);

  const login = useCallback(
    (token: string) =>
      SecureStore.setItemAsync("Authorization", token).then(loginToApp),
    []
  );

  const logout = useCallback(
    () => SecureStore.deleteItemAsync("Authorization").then(logoutFromApp),
    []
  );

  const isLoggedIn = useMemo(
    () => Boolean(isSignedIn && isSignedIn === "true"),
    [isSignedIn]
  );

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
