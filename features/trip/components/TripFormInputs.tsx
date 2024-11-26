import {
  DatePickerWithError,
  MultiSelect,
  Option,
  TextInputWithError,
} from "@/components/Input";
import { View } from "@/components/View";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";
import { Platform, StyleSheet } from "react-native";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { TripForm } from "@/types/trip";
import React from "react";

type Props = FormikProps<TripForm> & {
  participantsOptions: Option[];
  participants: string[];
  onParticipantsChange: (updated: string[]) => string[];
};

const TripFormInputs = ({
  errors,
  touched,
  values,
  participants,
  participantsOptions,
  onParticipantsChange,
  handleChange,
  handleBlur,
  setFieldValue,
}: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  const toStringDate = (e: DateTimePickerEvent) =>
    new Date(e.nativeEvent.timestamp).toString();

  return (
    <View style={styles.inputsWrapper}>
      <TextInputWithError
        value={values.title}
        error={touched.title ? errors.title : undefined}
        placeholder={t("common:title")}
        inputMode="text"
        onChangeText={handleChange("title")}
        onBlur={handleBlur("title")}
        nativeID="title"
      />
      <MultiSelect
        label={t("trips:select_participants")}
        data={participantsOptions}
        value={participants}
        onChange={(updated) => {
          const participants = onParticipantsChange(updated);
          setFieldValue("participants", participants);
        }}
      />

      <DatePickerWithError
        error={touched.end ? errors.end : undefined}
        nativeID="start"
        value={new Date(values.start)}
        onChange={(e) => handleChange("start")(toStringDate(e))}
        mode={Platform.OS === "ios" ? "datetime" : "date"}
        label={t("common:start")}
      />
      <DatePickerWithError
        error={touched.end ? errors.end : undefined}
        nativeID="end"
        value={new Date(values.end)}
        onChange={(e) => handleChange("end")(toStringDate(e))}
        mode={Platform.OS === "ios" ? "datetime" : "date"}
        label={t("common:end")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputsWrapper: {
    ...FLEX_COLUMN,
    gap: SPACING.LARGE,
  },
});

// todo co zrobic jak ktos zmniejszy zakres trip start/end a event zostanie poza zakresem

export default TripFormInputs;
