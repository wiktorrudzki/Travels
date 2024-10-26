import {
  FLEX_COLUMN,
  LABEL_FONT_SIZE,
  LITTLE_ROUNDED,
  SHADOW,
  SPACING,
} from "@/constants/styles";
import { AddIcon, useTheme } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import { View } from "../View";
import { Text } from "../Text";

type Option = {
  label: string;
  value: string;
};

type Props = {
  data: Option[];
  value: string[];
  label?: string;
  onChange: (items: string[]) => void;
};

const MultiSelectExample = ({ label, ...passThroughProps }: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
      {label && <Text fontSize={LABEL_FONT_SIZE} text={label} />}
      <MultiSelect
        style={{ ...styles.select, borderBottomColor: colors.muted[300] }}
        containerStyle={{
          ...styles.container,
        }}
        activeColor={colors.primary[400]}
        itemContainerStyle={{
          ...styles.itemContainer,
          borderColor: colors.muted[300],
        }}
        inside
        selectedStyle={{
          ...styles.selected,
          backgroundColor: colors.gray[200],
        }}
        selectedTextStyle={{ color: colors.black, fontSize: 14 }}
        searchPlaceholder={t("common:search")}
        inputSearchStyle={styles.inputSearch}
        labelField="label"
        valueField="value"
        search
        {...passThroughProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...FLEX_COLUMN,
    gap: SPACING.SMALL,
  },
  select: {
    borderBottomWidth: 1,
  },
  container: {
    ...LITTLE_ROUNDED,
    ...SHADOW,
  },
  selected: {
    ...LITTLE_ROUNDED,
    paddingVertical: SPACING.LARGE / 2,
    paddingHorizontal: SPACING.MEDIUM,
    borderWidth: 0,
  },
  selectedText: {},
  inputSearch: {
    borderWidth: 0,
    marginHorizontal: SPACING.MEDIUM,
  },
  itemContainer: {
    borderTopWidth: 1,
    marginHorizontal: SPACING.MEDIUM,
  },
});

export default MultiSelectExample;
