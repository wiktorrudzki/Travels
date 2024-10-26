import { EventForm } from "@/types/event";
import { Formik } from "formik";
import React, { useMemo } from "react";
import { useCreateEvent, useTrip } from "../hooks";
import { PrimaryButton } from "@/components/Button";
import { FormControl, ScrollView } from "native-base";
import {
  FLEX_COLUMN,
  SCROLLABLE_FORM_WITH_TAB_BADGE_PADDING_BOTTOM,
  SPACING,
} from "@/constants/styles";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import EventFormInputs from "./EventFormInputs";

const CreateEventForm = () => {
  const { schema, isLoading, onSubmit } = useCreateEvent();

  const { trip } = useTrip();

  const { t } = useTranslation("trips");

  const initialValues: EventForm = useMemo(
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
        <ScrollView contentContainerStyle={styles.scroll}>
          <FormControl style={styles.form}>
            <EventFormInputs {...props} trip={trip} />
            <PrimaryButton
              isLoading={isLoading}
              onPress={() => props.handleSubmit()}
              text={t("create_event")}
            />
          </FormControl>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: SCROLLABLE_FORM_WITH_TAB_BADGE_PADDING_BOTTOM,
  },
  form: { ...FLEX_COLUMN, gap: SPACING.MEDIUM },
});

export default CreateEventForm;
