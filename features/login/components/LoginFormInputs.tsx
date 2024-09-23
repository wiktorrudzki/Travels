import { LinkButton, PrimaryButton } from "@/components/Button";
import { TextInputWithError } from "@/components/Input";
import { ROUTES } from "@/constants/routes";
import { LoginCredentials } from "@/types/auth";
import { FormikProps } from "formik";
import { FormControl, View } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = FormikProps<LoginCredentials>;

const LoginFormInputs = ({
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  touched,
}: Props) => {
  const { t } = useTranslation();

  return (
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
        <LinkButton text={t("forgot_pwd")} href={ROUTES.login} />
      </View>
      <PrimaryButton onPress={() => handleSubmit()} text={t("log_in")} />
    </FormControl>
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

export default LoginFormInputs;
