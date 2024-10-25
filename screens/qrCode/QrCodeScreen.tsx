import { LoadingSpinner } from "@/components/Spinner";
import { CENTER_FLEX, FULL_SPACE } from "@/constants/styles";
import { useSignedInNavigation } from "@/hooks";
import { Image, Pressable } from "native-base";
import { StyleSheet } from "react-native";
import { useGetQRCode } from "@/features/qr-code/hooks";

const QrCodeScreen = () => {
  const { qrCode, isLoading } = useGetQRCode();

  const { goBack } = useSignedInNavigation();

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Pressable onPress={() => goBack()} style={styles.container}>
      <Image src={qrCode} size="2xl" alt="qr code" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_SPACE,
    ...CENTER_FLEX,
  },
});

export default QrCodeScreen;
