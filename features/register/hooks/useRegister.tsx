import { RegisterCredentials } from "@/types/auth";
import { specialCharacterRegex, uppercasedLetterRegex } from "@/utils/regex";
import { useTranslation } from "react-i18next";
import { object, ref, string } from "yup";

const useRegister = () => {
  const { t } = useTranslation(["common", "register"]);

  const registerSchema = object().shape({
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
    confirmPassword: string().oneOf([ref("password")], t("register:pwd_match")),
  });

  const onSubmit = (values: RegisterCredentials) => {
    console.log(values);
  };

  return { registerSchema, onSubmit };
};

export default useRegister;
