import { useAuth, usePromise, usePromiseWithLoading } from "@/hooks";
import { uppercasedLetterRegex } from "@/utils/regex";
import { useTranslation } from "react-i18next";
import { object, ref, string } from "yup";
import { toaster } from "@/lib/native-base";
import { register } from "@/dal/auth";

const useRegister = () => {
  const { t } = useTranslation(["common", "register"]);

  const { login } = useAuth();

  const [registerRequest, isLoading] = usePromiseWithLoading(
    register,
    login,
    (e) => toaster({ variant: "info", text: e })
  );

  const registerSchema = object().shape({
    email: string().required(t("required_field")).email(t("incorrect_email")),
    firstName: string()
      .required(t("required_field"))
      .min(2, t("min_length", { length: 2 })),
    lastName: string()
      .required(t("required_field"))
      .min(2, t("min_length", { length: 2 })),
    password: string()
      .min(8, t("min_length", { length: 8 }))
      .matches(
        uppercasedLetterRegex,
        t("one_uppercase_letter", { field: t("password") })
      )
      .required(t("required_field")),
    confirmPassword: string().oneOf([ref("password")], t("register:pwd_match")),
  });

  return { registerSchema, isLoading, onSubmit: registerRequest };
};

export default useRegister;
