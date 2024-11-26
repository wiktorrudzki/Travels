import { LoadingSpinner } from "@/components/Spinner";
import { useGetQRCode } from "@/features/qr-code/hooks";
import { QrCode } from "@/features/qr-code/components";
import { View } from "@/components/View";
import { Text } from "@/components/Text";
import { StyleSheet } from "react-native";
import { CENTER_FLEX, FULL_SPACE } from "@/constants/styles";
import { useTranslation } from "react-i18next";
import React from "react";

const QrCodeScreen = () => {
  const { qrCode, isLoading } = useGetQRCode();

  const { t } = useTranslation("account");

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      {qrCode ? <QrCode qrCode={qrCode} /> : <Text text={t("qr_not_found")} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_SPACE,
    ...CENTER_FLEX,
  },
});

export default QrCodeScreen;
