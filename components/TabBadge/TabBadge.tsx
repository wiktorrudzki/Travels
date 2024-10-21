import React from "react";
import { View } from "../View";
import { StyleSheet } from "react-native";
import {
  CENTER_FLEX,
  FLEX_COLUMN,
  FULL_WIDTH,
  SEMI_BOLD_TITLE,
  SPACING,
} from "@/constants/styles";
import { Text } from "../Text";
import { ArrowBackIcon, Pressable, useTheme } from "native-base";
import { RootStackSignedInPropsList } from "@/types/routes";
import { SignedLink } from "../Link";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import { useSignedInNavigation } from "@/hooks";

type Props = {
  title?: string;
  goBack?: {
    text: string;
    to?: To<RootStackSignedInPropsList>;
  };
};

const TabBadge = ({ title, goBack: goBackProps }: Props) => {
  const { colors } = useTheme();

  const { goBack } = useSignedInNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.badge} backgroundColor={colors.primary[400]} />
      <View style={styles.textWrapper}>
        {goBackProps &&
          (goBackProps.to ? (
            <SignedLink to={goBackProps.to}>
              <View style={styles.goBackWrapper}>
                <ArrowBackIcon color={colors.white} />
                <Text color={colors.white} text={goBackProps.text} />
              </View>
            </SignedLink>
          ) : (
            <Pressable onPress={() => goBack()}>
              <View style={styles.goBackWrapper}>
                <ArrowBackIcon color={colors.white} />
                <Text color={colors.white} text={goBackProps.text} />
              </View>
            </Pressable>
          ))}
        {title && (
          <Text text={title} color={colors.white} style={styles.title} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_WIDTH,
    position: "relative",
    height: "25%",
    justifyContent: "center",
  },
  badge: {
    borderBottomLeftRadius: 2000,
    borderBottomRightRadius: 2000,
    position: "absolute",
    width: "200%",
    height: "200%",
    left: "-50%",
    top: "-100%",
  },
  textWrapper: {
    ...FLEX_COLUMN,
    gap: SPACING.MEDIUM,
    paddingLeft: SPACING.HUGE,
  },
  goBackWrapper: {
    ...CENTER_FLEX,
    gap: SPACING.SMALL,
    justifyContent: "flex-start",
  },
  title: SEMI_BOLD_TITLE,
});

export default TabBadge;
