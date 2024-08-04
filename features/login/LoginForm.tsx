import { LinkButton, PrimaryButton } from "@/components/Button";
import { TextInputWithError } from "@/components/Input";
import { LoginCredentials } from "@/types/auth";
import { specialCharacterRegex, uppercasedLetterRegex } from "@/utils/regex";
import { Formik } from "formik";
import { FormControl, View } from "native-base";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { object, string } from "yup";

const LoginForm = () => {
  const { t } = useTranslation();

  const initialValues: LoginCredentials = { email: "", password: "" };

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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
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
            <LinkButton text={t("forgot_pwd")} href="/login" />
          </View>
          <PrimaryButton onPress={() => handleSubmit()} text={t("log_in")} />
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

export default LoginForm;
