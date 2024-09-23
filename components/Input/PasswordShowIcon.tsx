import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Pressable } from "native-base";
import React from "react";

type Props = {
  show: boolean;
  swap: () => void;
};

const PasswordShowIcon = ({ show, swap }: Props) => (
  <Pressable onPress={swap}>
    <Icon
      as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
      size={5}
      mr="2"
      color="muted.400"
    />
  </Pressable>
);

export default PasswordShowIcon;
