import { CreateEventForm as CreateEventFormType } from "@/types/event";
import { Formik } from "formik";
import React, { useMemo } from "react";
import { useCreateEvent, useTrip } from "../hooks";
import EventFormInputs from "./EventFormInputs";
import { PrimaryButton } from "@/components/Button";
import { FormControl } from "native-base";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const CreateEventForm = () => {
  const { onSubmit, schema } = useCreateEvent();

  const { trip } = useTrip();

  const { t } = useTranslation("trips");

  const { isLoading } = useCreateEvent();

  const initialValues: CreateEventFormType = useMemo(
    () => ({
      name: "",
      description: "",
      tripId: trip.id,
      start: trip.start,
      end: trip.end,
    }),
    [trip]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <FormControl style={styles.form}>
          <EventFormInputs {...props} />
          <PrimaryButton
            isLoading={isLoading}
            onPress={() => props.handleSubmit()}
            text={t("create_event")}
          />
        </FormControl>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: { ...FLEX_COLUMN, gap: SPACING.MEDIUM },
});

export default CreateEventForm;
