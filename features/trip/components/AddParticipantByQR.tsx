import { DangerButton } from "@/components/Button";
import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { BarcodeScanningResult, CameraView } from "expo-camera";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

type Props = {
  onScan: (e: BarcodeScanningResult) => void;
  onCancel: () => void;
};

const AddParticipantByQR = ({ onScan, onCancel }: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  return (
    <View style={styles.cameraWrapper}>
      <Text text={t("trips:scan_friends_qr")} />
      <CameraView
        onBarcodeScanned={onScan}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={styles.camera}
      />
      <DangerButton onPress={onCancel} text={t("common:cancel")} />
    </View>
  );
};

const styles = StyleSheet.create({
  cameraWrapper: { ...FLEX_COLUMN, gap: SPACING.MEDIUM },
  camera: {
    height: "60%",
  },
});

export default AddParticipantByQR;
