import { AuthorizedLayout } from "@/components/Layout";
import { View } from "@/components/View";
import { FULL_SPACE, ROUNDED, SPACING } from "@/constants/styles";
import { useSignedInNavigation } from "@/hooks";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, useTheme } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  const { colors } = useTheme();

  const { push } = useSignedInNavigation();

  return (
    <AuthorizedLayout
      title={
        <Pressable
          onPress={() => push("chat", { id: undefined })}
          style={styles.iconButton}
          borderColor={colors.primary[400]}
          backgroundColor={colors.white}
        >
          <FontAwesome color={colors.primary[400]} name="wechat" size={32} />
        </Pressable>
      }
    >
      <View style={styles.container}></View>
    </AuthorizedLayout>
  );
};

const styles = StyleSheet.create({
  container: FULL_SPACE,
  iconButton: {
    ...ROUNDED,
    padding: SPACING.MEDIUM,
    borderWidth: 1,
    position: "absolute",
    bottom: 130,
    right: 25,
  },
});

export default HomeScreen;
