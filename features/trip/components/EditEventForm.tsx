import { EventForm } from "@/types/event";
import { Formik } from "formik";
import React, { useMemo } from "react";
import { useEvent, useEditEvent, useDeleteEvent } from "../hooks";
import { DangerButton, PrimaryButton } from "@/components/Button";
import { FormControl } from "native-base";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import EventFormInputs from "./EventFormInputs";
import { LoadingSpinner } from "@/components/Spinner";

const EditEventForm = () => {
  const { event } = useEvent();

  const { trip } = event;

  const { deleteEvent, isLoading: isLoadingDelete } = useDeleteEvent();

  const { schema, isLoading: isLoadingEdit, onSubmit } = useEditEvent(event.id);

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

  if (isLoadingDelete) {
    return <LoadingSpinner style={{ height: "auto" }} />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <FormControl isDisabled={!event.canEdit} style={styles.form}>
          <EventFormInputs {...props} trip={trip} />
          {event.canEdit && (
            <>
              <PrimaryButton
                isLoading={isLoadingEdit}
                onPress={() => props.handleSubmit()}
                text={t("edit_event")}
              />
              <DangerButton
                onPress={() => deleteEvent(event.id)}
                text={t("trips:delete_event")}
              />
            </>
          )}
        </FormControl>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: { ...FLEX_COLUMN, gap: SPACING.MEDIUM },
});

export default EditEventForm;
