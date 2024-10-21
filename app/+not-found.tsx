import { SignedLinkButton, UnsignedLinkButton } from "@/components/Button";
import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { CENTER_FLEX, FULL_SPACE } from "@/constants/styles";
import { useAuth } from "@/hooks";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

export default function NotFound() {
  const { isLoggedIn } = useAuth();

  const { t } = useTranslation();

  const notFoundText = t("not_found_link");

  return (
    <View style={styles.container}>
      <Text text={t("not_found_message")} />
      {isLoggedIn ? (
        <SignedLinkButton text={notFoundText} href={{ screen: "home" }} />
      ) : (
        <UnsignedLinkButton text={notFoundText} href={{ screen: "login" }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    ...FULL_SPACE,
    flexDirection: "column",
  },
});
