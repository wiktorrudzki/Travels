import { EventForm } from "@/types/event";
import { Formik } from "formik";
import React, { useMemo } from "react";
import { useEvent, useEditEvent } from "../hooks";
import { PrimaryButton } from "@/components/Button";
import { FormControl } from "native-base";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import EventFormInputs from "./EventFormInputs";

const EditEventForm = () => {
  const { event } = useEvent();

  const { trip } = event;

  const { schema, isLoading, onSubmit } = useEditEvent(event.id);

  const { t } = useTranslation("trips");

  const initialValues: EventForm = useMemo(
    () => ({
      name: event.name,
      description: event.description ?? undefined,
      tripId: event.trip.id,
      start: event.start,
      end: event.end,
    }),
    [event]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <FormControl style={styles.form}>
          <EventFormInputs {...props} trip={trip} />
          <PrimaryButton
            isLoading={isLoading}
            onPress={() => props.handleSubmit()}
            text={t("edit_event")}
          />
        </FormControl>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: { ...FLEX_COLUMN, gap: SPACING.MEDIUM },
});

export default EditEventForm;
