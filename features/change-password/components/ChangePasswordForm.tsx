import { Formik } from "formik";
import React from "react";
import { useChangePassword } from "../hooks";
import ChangePasswordInputs from "./ChangePasswordInputs";
import { PrimaryButton } from "@/components/Button";
import { useTranslation } from "react-i18next";
import { FormControl } from "native-base";
import { StyleSheet } from "react-native";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";

const ChangePasswordForm = () => {
  const { isLoading, schema, onSubmit } = useChangePassword();

  const { t } = useTranslation("account");

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
    >
      {(props) => (
        <FormControl style={styles.form}>
          <ChangePasswordInputs {...props} />
          <PrimaryButton
            onPress={() => props.handleSubmit()}
            isLoading={isLoading}
            text={t("change_password")}
          />
        </FormControl>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: { ...FLEX_COLUMN, gap: SPACING.MEDIUM },
});

export default ChangePasswordForm;
