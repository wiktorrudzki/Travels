import React, { ComponentProps } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTranslation } from "react-i18next";
import { useTheme } from "native-base";

type Props = ComponentProps<typeof DateTimePicker>;

const DatePicker = (props: Props) => {
  const { i18n } = useTranslation();

  const { colors } = useTheme();

  return (
    <DateTimePicker
      focusable
      locale={i18n.language}
      themeVariant="light"
      accentColor={colors.primary[400]}
      {...props}
    />
  );
};

export default DatePicker;
