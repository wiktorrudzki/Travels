import { FLEX_COLUMN, ROUNDED, SPACING } from "@/constants/styles";
import { useSignedInNavigation } from "@/hooks";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Pressable, useTheme } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const QrCode = () => {
  const { colors } = useTheme();

  const { push } = useSignedInNavigation();

  return (
    <Pressable
      borderColor={colors.primary[400]}
      backgroundColor={colors.white}
      style={styles.qrCodeWrapper}
      onPress={() => push("qr-code")}
    >
      <Icon
        as={MaterialIcons}
        name="qr-code"
        size="4xl"
        color={colors.primary[400]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    gap: SPACING.LARGE,
  },
  qrCodeWrapper: {
    ...ROUNDED,
    padding: SPACING.MEDIUM,
    borderWidth: 1,
    position: "absolute",
    bottom: 130,
    right: 25,
  },
});

export default QrCode;
