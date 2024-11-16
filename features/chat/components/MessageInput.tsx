import { View } from "@/components/View";
import {
  CENTER_FLEX,
  FULL_WIDTH,
  LABEL_FONT_SIZE,
  SPACING,
} from "@/constants/styles";
import { useConversation } from "@/hooks";
import { Feather } from "@expo/vector-icons";
import { Pressable, useTheme } from "native-base";
import React, { useMemo, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = React.ComponentPropsWithRef<typeof TextInput>;

const MessageInput = (props: Props) => {
  const [value, setValue] = useState("");

  const { sendMessage } = useConversation();

  const { colors } = useTheme();

  const disabled = useMemo(() => value.length === 0, [value]);

  console.log(disabled);

  return (
    <View style={styles.container} borderColor={colors.black}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={{ fontSize: LABEL_FONT_SIZE }}
        {...props}
      />
      <Pressable
        disabled={disabled}
        onPress={() => {
          sendMessage(value);
          setValue("");
        }}
      >
        <Feather
          name="send"
          size={24}
          color="black"
          style={{ opacity: disabled ? 0.4 : 1 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    ...FULL_WIDTH,
    paddingVertical: SPACING.TINY,
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
});

export default MessageInput;
