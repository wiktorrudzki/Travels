import { LinkButton, PrimaryButton } from "@/components/Button";
import { TextInputWithError } from "@/components/Input";
import { RegisterCredentials } from "@/types/auth";
import { specialCharacterRegex, uppercasedLetterRegex } from "@/utils/regex";
import { Formik } from "formik";
import { FormControl, View } from "native-base";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { object, ref, string } from "yup";

const RegisterForm = () => {
  const { t } = useTranslation(["common", "register"]);

  const initialValues: RegisterCredentials = {
    email: "",
    password: "",
    confirmPassword: "",
  };

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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(e) => {
        console.log(e);
      }}
    >
      {({ handleChange, handleSubmit, handleBlur, errors, touched }) => (
        <FormControl style={styles.form}>
          <View style={styles.inputsWrapper}>
            <TextInputWithError
              error={touched.email ? errors.email : undefined}
              placeholder={t("email")}
              inputMode="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              nativeID="email"
              autoComplete="email"
            />
            <TextInputWithError
              error={touched.password ? errors.password : undefined}
              placeholder={t("password")}
              type="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              nativeID="password"
            />
            <TextInputWithError
              error={
                touched.confirmPassword ? errors.confirmPassword : undefined
              }
              placeholder={t("confirm_pwd")}
              type="password"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              nativeID="confirmPassword"
            />
          </View>
          <PrimaryButton onPress={() => handleSubmit()} text={t("register")} />
        </FormControl>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  inputsWrapper: {
    flexDirection: "column",
    gap: 12,
  },
});

export default RegisterForm;
