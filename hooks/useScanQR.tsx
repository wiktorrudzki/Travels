import { toaster } from "@/lib/native-base";
import { Camera, useCameraPermissions } from "expo-camera";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Linking } from "react-native";

const useScanQR = () => {
  const [showQRScanner, setShowQRScanner] = useState(false);

  const permissions = useCameraPermissions();

  const { t } = useTranslation("trips");

  const hideScanner = useCallback(() => setShowQRScanner(false), []);

  const onQRScannerAcessRequest = () => {
    if (permissions[0]?.granted) {
      return setShowQRScanner(true);
    }

    if (permissions[0]?.canAskAgain) {
      return Camera.requestCameraPermissionsAsync().then(({ granted }) => {
        setShowQRScanner(granted);
      });
    }

    toaster({ text: t("trips:camera_access_needed"), variant: "warning" });
    Linking.openSettings();
  };

  return { showQRScanner, onQRScannerAcessRequest, hideScanner };
};

export default useScanQR;
