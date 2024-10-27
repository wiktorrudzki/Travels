import React, { ComponentProps } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTranslation } from "react-i18next";
import { useTheme } from "native-base";
import { Platform } from "react-native";

type Props = ComponentProps<typeof DateTimePicker>;

const DatePicker = (props: Props) => {
  const { i18n } = useTranslation();

  const { colors } = useTheme();

  return (
    <DateTimePicker
      focusable
      locale={i18n.language}
      themeVariant={Platform.OS === "ios" ? "light" : undefined}
      accentColor={Platform.OS === "ios" ? colors.primary[400] : undefined}
      {...props}
    />
  );
};

export default DatePicker;
