import { DangerButton } from "@/components/Button";
import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import { ACCOUNT_TABS } from "@/constants/routes";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { Section } from "@/features/account/components";
import { useLogout } from "@/features/account/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

const AccountScreen = () => {
  const { t } = useTranslation(["common", "account"]);

  const { logout } = useLogout();

  return (
    <AuthorizedLayout title={<TabBadge title={t("common:settings")} />}>
      <View style={styles.container}>
        {ACCOUNT_TABS.map(({ title, tabs }) => (
          <Section title={t(`account:${title}`)} tabs={tabs} />
        ))}
        <DangerButton text={t("common:logout")} onPress={logout} />
      </View>
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    gap: SPACING.LARGE,
  },
});

export default AccountScreen;
