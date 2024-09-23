import { useShow } from "@/hooks";
import { Input } from "native-base";
import React, { useMemo } from "react";
import PasswordShowIcon from "./PasswordShowIcon";

type Props = React.ComponentProps<typeof Input>;

const TextInput = ({ type, ...rest }: Props) => {
  const { show, swap } = useShow();

  const isPassword = useMemo(() => type === "password", [type]);
  const hideText = useMemo(() => isPassword && !show, [isPassword, show]);

  return (
    <Input
      size="lg"
      InputRightElement={
        isPassword ? <PasswordShowIcon swap={swap} show={show} /> : undefined
      }
      type={hideText ? "password" : "text"}
      {...rest}
    />
  );
};

export default TextInput;
