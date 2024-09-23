import { LoginCredentials } from "@/types/auth";
import { specialCharacterRegex, uppercasedLetterRegex } from "@/utils/regex";
import { useTranslation } from "react-i18next";
import { object, string } from "yup";

const useLogin = () => {
  const { t } = useTranslation();

  const loginSchema = object().shape({
    email: string().required(t("required_field")).email(t("incorrect_email")),
    password: string()
      .min(8, t("min_length", { length: 8 }))
      .matches(
        uppercasedLetterRegex,
        t("one_uppercase_letter", { field: t("password") })
      )
      .matches(
        specialCharacterRegex,
        t("one_special_character", { field: t("password") })
      )
      .required(t("required_field")),
  });

  const onSubmit = (values: LoginCredentials) => {
    console.log(values);
  };

  return { loginSchema, onSubmit };
};

export default useLogin;
