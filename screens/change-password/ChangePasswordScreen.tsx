import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import { ChangePasswordForm } from "@/features/change-password/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

const ChangePasswordScreen = () => {
  const { t } = useTranslation(["account", "common"]);

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            to: { screen: "account" },
            text: t("common:settings"),
          }}
          title={t("account:change_password")}
        />
      }
    >
      <ChangePasswordForm />
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...FLEX_COLUMN,
    // gap: SPACING.LARGE,
  },
});

export default ChangePasswordScreen;
