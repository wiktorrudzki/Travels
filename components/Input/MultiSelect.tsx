import { LITTLE_ROUNDED, SHADOW, SPACING } from "@/constants/styles";
import { useTheme } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";

type Option = {
  label: string;
  value: string;
};

type Props = {
  data: Option[];
  value: string[];
  onChange: (items: string[]) => void;
};

const MultiSelectExample = (props: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  const { colors } = useTheme();

  return (
    <MultiSelect
      style={{ ...styles.select, borderBottomColor: colors.muted[300] }}
      containerStyle={styles.container}
      itemContainerStyle={{
        ...styles.itemContainer,
        borderColor: colors.muted[300],
      }}
      selectedTextStyle={{ color: colors.primary[400] }}
      searchPlaceholder={t("common:search")}
      inputSearchStyle={styles.inputSearch}
      labelField="label"
      valueField="value"
      placeholder={t("trips:select_participants")}
      search
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  select: {
    paddingVertical: SPACING.MEDIUM,
    borderBottomWidth: 1,
  },
  container: {
    ...LITTLE_ROUNDED,
    ...SHADOW,
  },
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
