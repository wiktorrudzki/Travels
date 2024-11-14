import { Feather } from "@expo/vector-icons";
import { Input, Pressable } from "native-base";
import React, { useState } from "react";

type Props = React.ComponentPropsWithRef<typeof Input>;

const MessageInput = (props: Props) => {
  const [value, setValue] = useState("");

  return (
    <Input
      //   variant="underlined"
      //   value={value}
      type="text"
      onFocus={(e) => console.log(e)}
      //   onChangeText={setValue}
      //   paddingLeft="2"
      //   InputRightElement={
      //     <Pressable onPress={() => setValue("")}>
      //       <Feather
      //         name="send"
      //         size={24}
      //         color="black"
      //         disabled={value.length === 0}
      //       />
      //     </Pressable>
      //   }
      size="lg"
      {...props}
    />
  );
};

export default MessageInput;
