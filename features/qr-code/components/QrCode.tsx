import { useSignedInNavigation } from "@/hooks";
import { Image, Pressable } from "native-base";
import React from "react";

type Props = {
  qrCode: string;
};

const QrCode = ({ qrCode }: Props) => {
  const { goBack } = useSignedInNavigation();

  return (
    <Pressable onPress={() => goBack()}>
      <Image src={qrCode} size="2xl" alt="qr code" />
    </Pressable>
  );
};

export default QrCode;
