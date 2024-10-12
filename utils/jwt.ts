import { AxiosHeaderValue } from "axios";

export const decocdeAuthorizationHeader = (header: AxiosHeaderValue) => {
  if (!header) return "";

  const splitHeader = header.toString().split(" ");

  if (splitHeader.length < 2) return "";

  return splitHeader[1] || "";
};
