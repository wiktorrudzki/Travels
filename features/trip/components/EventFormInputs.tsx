import { DatePickerWithError, TextInputWithError } from "@/components/Input";
import { View } from "@/components/View";
import { EventForm } from "@/types/event";
import { FormikProps } from "formik";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { Trip } from "@/types/trip";
import { addHour, parseDateTime } from "@/lib/date-fns";

type Props = FormikProps<EventForm> & {
  trip: Pick<Trip, "start" | "end">;
};

const EventFormInputs = ({
  errors,
  touched,
  values,
  trip,
  handleChange,
  handleBlur,
}: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  const minimumDate = useMemo(() => new Date(trip.start), [trip]);
  const maximumDate = useMemo(() => new Date(trip.end), [trip]);

  const toStringDate = (date?: Date) => {
    return addHour(date)?.toISOString().split(".")[0];
  };

  console.log(values);

  return (
    <View style={styles.inputsWrapper}>
      <TextInputWithError
        value={values.name}
        error={touched.name ? errors.name : undefined}
        placeholder={t("common:name")}
        inputMode="text"
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        nativeID="name"
      />
      <TextInputWithError
        value={values.description}
        error={touched.description ? errors.description : undefined}
        placeholder={t("trips:desc")}
        inputMode="text"
        onChangeText={handleChange("description")}
        onBlur={handleBlur("description")}
        nativeID="description"
      />
      <DatePickerWithError
        error={touched.end ? errors.end : undefined}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        nativeID="start"
        value={parseDateTime(values.start)}
        onChange={(e, date) => handleChange("start")(toStringDate(date))}
        mode="datetime"
        label={t("common:start")}
      />
      <DatePickerWithError
        error={touched.end ? errors.end : undefined}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        nativeID="end"
        value={parseDateTime(values.end)}
        onChange={(e, date) => handleChange("end")(toStringDate(date))}
        mode="datetime"
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

export default EventFormInputs;
