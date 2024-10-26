import { PrimaryButton } from "@/components/Button";
import { TextInputWithError } from "@/components/Input";
import { RegisterRequest } from "@/types/auth";
import { FormikProps } from "formik";
import { FormControl, View } from "native-base";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { useRegister } from "../hooks";
import { SPACING } from "@/constants/styles";

type Props = FormikProps<RegisterRequest>;

const RegisterFormInputs = ({
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  touched,
}: Props) => {
  const { t } = useTranslation();

  const { isLoading } = useRegister();

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
          error={touched.firstName ? errors.firstName : undefined}
          placeholder={t("first_name")}
          onChangeText={handleChange("firstName")}
          onBlur={handleBlur("firstName")}
          nativeID="firstName"
          autoComplete="name"
        />
        <TextInputWithError
          error={touched.lastName ? errors.lastName : undefined}
          placeholder={t("last_name")}
          onChangeText={handleChange("lastName")}
          onBlur={handleBlur("lastName")}
          nativeID="lastName"
          autoComplete="name-family"
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
      <PrimaryButton
        isLoading={isLoading}
        onPress={() => handleSubmit()}
        text={t("register")}
      />
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
    gap: SPACING.LARGE / 2,
  },
});

export default RegisterFormInputs;
