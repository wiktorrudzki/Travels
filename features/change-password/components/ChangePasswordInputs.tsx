import { TextInputWithError } from "@/components/Input";
import { View } from "@/components/View";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { ChangePasswordRequest } from "@/types/auth";
import { FormikProps } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = FormikProps<ChangePasswordRequest>;

const ChangePasswordInputs = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: Props) => {
  const { t } = useTranslation("account");

  return (
    <View style={styles.inputsWrapper}>
      <TextInputWithError
        value={values.oldPassword}
        error={touched.oldPassword ? errors.oldPassword : undefined}
        placeholder={t("old_pwd")}
        type="password"
        onChangeText={handleChange("oldPassword")}
        onBlur={handleBlur("oldPassword")}
        nativeID="oldPassword"
        autoComplete="password"
      />
      <TextInputWithError
        value={values.password}
        error={touched.password ? errors.password : undefined}
        placeholder={t("new_pwd")}
        type="password"
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        nativeID="password"
      />
      <TextInputWithError
        value={values.confirmPassword}
        error={touched.confirmPassword ? errors.confirmPassword : undefined}
        placeholder={t("confirm_new_pwd")}
        type="password"
        onChangeText={handleChange("confirmPassword")}
        onBlur={handleBlur("confirmPassword")}
        nativeID="confirmPassword"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputsWrapper: {
    ...FLEX_COLUMN,
    gap: SPACING.LARGE,
  },
});

export default ChangePasswordInputs;
