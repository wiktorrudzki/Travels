import { login } from "@/dal/auth";
import { useAuth, usePromise } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { uppercasedLetterRegex } from "@/utils/regex";
import { useTranslation } from "react-i18next";
import { object, string } from "yup";

const useLogin = () => {
  const { t } = useTranslation();

  const { login: loginToApp } = useAuth();

  const [loginRequest] = usePromise(login, loginToApp, (e) =>
    toaster({ text: e, variant: "danger" })
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

  return { loginSchema, onSubmit: loginRequest };
};

export default useLogin;
