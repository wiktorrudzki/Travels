import CryptoJS from "crypto-js";

export const hashWithSha256ToHex = (value: string) =>
  CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex);
