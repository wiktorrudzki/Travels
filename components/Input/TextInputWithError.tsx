import React from "react";
import TextInput from "./TextInput";
import InputErrorMessage from "./InputErrorMessage";
import { View } from "../View";
import NativeTextInput from "./NativeTextInput";

type Props = React.ComponentPropsWithRef<typeof NativeTextInput> & {
  nativeID: string;
  error: string | undefined;
};

const TextInputWithError = ({ error, nativeID, ...rest }: Props) => (
  <View>
    <NativeTextInput
      // variant="underlined"
      nativeID={nativeID}
      // isInvalid={Boolean(error)}
      {...rest}
    />
    <InputErrorMessage nativeId={nativeID} error={error} />
  </View>
);

export default TextInputWithError;
