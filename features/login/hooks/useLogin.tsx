import { login } from "@/dal/auth";
import { useAuth, usePromiseWithLoading } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { uppercasedLetterRegex } from "@/utils/regex";
import { useTranslation } from "react-i18next";
import { object, string } from "yup";
import CryptoJS from "crypto-js";
import { LoginRequest } from "@/types/auth";
import { hashWithSha256ToHex } from "@/lib/crypto-js";

const useLogin = () => {
  const { t } = useTranslation();

  const { login: loginToApp } = useAuth();

  const [loginRequest, isLoading] = usePromiseWithLoading(
    login,
    loginToApp,
    (e) => toaster({ text: e, variant: "danger" })
  );

  const loginSchema = object().shape({
    email: string().required(t("required_field")).email(t("incorrect_email")),
    password: string()
      .min(8, t("min_length", { length: 8 }))
      .matches(
        uppercasedLetterRegex,
        t("one_uppercase_letter", { field: t("password") })
      )
      .required(t("required_field")),
  });

  const onSubmit = (values: LoginRequest) => {
    const password = hashWithSha256ToHex(values.password);

    return loginRequest({ ...values, password });
  };

  return { loginSchema, isLoading, onSubmit };
};

export default useLogin;
