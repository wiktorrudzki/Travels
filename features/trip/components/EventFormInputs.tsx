import { DatePickerWithError, TextInputWithError } from "@/components/Input";
import { View } from "@/components/View";
import { CreateEventForm } from "@/types/event";
import { FormikProps } from "formik";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { useTrip } from "../hooks";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";

type Props = FormikProps<CreateEventForm>;

const EventFormInputs = ({
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
}: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  const { trip } = useTrip();

  const minimumDate = useMemo(() => new Date(trip.start), [trip]);
  const maximumDate = useMemo(() => new Date(trip.end), [trip]);

  const toStringDate = (e: DateTimePickerEvent) =>
    new Date(e.nativeEvent.timestamp).toString();

  return (
    <View style={styles.inputsWrapper}>
      <TextInputWithError
        error={touched.name ? errors.name : undefined}
        placeholder={t("common:name")}
        inputMode="text"
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        nativeID="name"
      />
      <TextInputWithError
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
        value={new Date(values.start)}
        onChange={(e) => handleChange("start")(toStringDate(e))}
        mode="datetime"
        label={t("common:start")}
      />
      <DatePickerWithError
        error={touched.end ? errors.end : undefined}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        nativeID="end"
        value={new Date(values.end)}
        onChange={(e) => handleChange("end")(toStringDate(e))}
        mode="datetime"
        label={t("common:end")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputsWrapper: {
    ...FLEX_COLUMN,
    gap: SPACING.MEDIUM,
  },
});

export default EventFormInputs;
