import { View } from "@/components/View";
import { Tab as TabType } from "@/types/account";
import React from "react";
import Tab from "./Tab";
import { StyleSheet } from "react-native";
import {
  BOLD_UPPERCASED_TITLE,
  FLEX_COLUMN,
  SPACING,
} from "@/constants/styles";
import { Text } from "@/components/Text";
import { useTheme } from "native-base";

type Props = {
  title: string;
  tabs: TabType[];
};

const Section = ({ title, tabs }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title} text={title} color={colors.text[400]} />
      {tabs.map((tab, index) => (
        <Tab key={`${tab.title}_${index}`} tab={tab} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_COLUMN,
    gap: SPACING.MEDIUM,
  },
  title: BOLD_UPPERCASED_TITLE,
});

export default Section;
