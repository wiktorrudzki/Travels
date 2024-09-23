import { PrimaryButton } from "@/components/Button";
import { TextInputWithError } from "@/components/Input";
import { RegisterCredentials } from "@/types/auth";
import { FormikProps } from "formik";
import { FormControl, View } from "native-base";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = FormikProps<RegisterCredentials>;

const RegisterFormInputs = ({
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
        <TextInputWithError
          error={touched.confirmPassword ? errors.confirmPassword : undefined}
          placeholder={t("confirm_pwd")}
          type="password"
          onChangeText={handleChange("confirmPassword")}
          onBlur={handleBlur("confirmPassword")}
          nativeID="confirmPassword"
        />
      </View>
      <PrimaryButton onPress={() => handleSubmit()} text={t("register")} />
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

export default RegisterFormInputs;
