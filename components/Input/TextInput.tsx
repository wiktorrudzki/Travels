import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input, Pressable } from "native-base";
import React, { useState } from "react";

type Props = React.ComponentProps<typeof Input>;

const TextInput = ({ type, ...rest }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      size="lg"
      InputRightElement={
        type === "password" ? (
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        ) : undefined
      }
      type={type === "password" && !show ? "password" : "text"}
      {...rest}
    />
  );
};

export default TextInput;
