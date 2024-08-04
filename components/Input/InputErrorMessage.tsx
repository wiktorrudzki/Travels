import { FormControl, WarningOutlineIcon } from "native-base";
import React from "react";

type Props = {
  error: string | undefined;
  nativeId?: string;
  message?: string;
};

const InputErrorMessage = ({ error, message, nativeId }: Props) => (
  <FormControl.ErrorMessage
    leftIcon={<WarningOutlineIcon size="xs" />}
    isInvalid={Boolean(error)}
    nativeID={nativeId}
  >
    {message || error}
  </FormControl.ErrorMessage>
);

export default InputErrorMessage;
