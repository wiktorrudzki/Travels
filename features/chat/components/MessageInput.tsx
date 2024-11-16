import { View } from "@/components/View";
import { useConversation } from "@/hooks";
import { Feather } from "@expo/vector-icons";
import { Input, Pressable } from "native-base";
import React, { useState } from "react";
import { TextInput } from "react-native";

type Props = React.ComponentPropsWithRef<typeof Input>;

const MessageInput = (props: Props) => {
  const [value, setValue] = useState("");

  const { sendMessage } = useConversation();

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={{ width: 200, height: 50, backgroundColor: "lightblue" }}
      />
      <Pressable
        onPress={() => {
          sendMessage(value);
          setValue("");
        }}
      >
        <Feather
          name="send"
          size={24}
          color="black"
          disabled={value.length === 0}
        />
      </Pressable>
    </View>
  );
};

export default MessageInput;
