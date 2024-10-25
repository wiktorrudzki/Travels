import { getQrCode } from "@/dal/auth";
import { usePromiseWithLoading } from "@/hooks";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";

const useGetQRCode = () => {
  const [qr, setQr] = useState<string>();

  const [get, isLoading] = usePromiseWithLoading(getQrCode, (code) => {
    const base64String = `data:image/png;base64,${Buffer.from(code).toString(
      "base64"
    )}`;
    setQr(base64String);
  });

  useEffect(() => {
    get();
  }, []);

  return { qrCode: qr, isLoading };
};

export default useGetQRCode;
