import { ROUTES } from "@/constants/routes";
import { login } from "@/dal/auth";
import { usePromise, useRouter } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { uppercasedLetterRegex } from "@/utils/regex";
import { useTranslation } from "react-i18next";
import { object, string } from "yup";
import * as SecureStore from "expo-secure-store";

const useLogin = () => {
  const { t } = useTranslation();

  const { replace } = useRouter();

  const successfullLogin = (value: string) =>
    SecureStore.setItemAsync("Authorization", value).then(() =>
      replace(ROUTES.home)
    );

  const [loginRequest] = usePromise(login, successfullLogin, (e) =>
    toaster({ description: e, variant: "" })
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
