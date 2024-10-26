import { Formik } from "formik";
import React, { useMemo } from "react";
import { useEditTrip, useTripWithEvents } from "../hooks";
import { DangerButton, PrimaryButton } from "@/components/Button";
import { FormControl } from "native-base";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { LoadingSpinner } from "@/components/Spinner";
import { TripForm } from "@/types/trip";
import { useDeleteTrip } from "@/features/trips/hooks";
import TripFormInputs from "./TripFormInputs";
import { useSignedInNavigation } from "@/hooks";

const EditTripForm = () => {
  const { trip } = useTripWithEvents();

  const { replace } = useSignedInNavigation();

  const { schema, isLoading: isLoadingEdit, onSubmit } = useEditTrip(trip.id);

  const { deleteTrip, isLoading: isLoadingDelete } = useDeleteTrip(() =>
    replace("trips")
  );

  const { t } = useTranslation("trips");

  const initialValues: TripForm = useMemo(
    () => ({
      title: trip.title,
      start: trip.start,
      end: trip.end,
      participants: trip.participants.map((p) => p.guid),
    }),
    [trip]
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
        <FormControl isDisabled={!trip.isOwner} style={styles.form}>
          <TripFormInputs {...props} />
          {trip.isOwner && (
            <>
              <PrimaryButton
                isLoading={isLoadingEdit}
                onPress={() => props.handleSubmit()}
                text={t("edit_trip")}
              />
              <DangerButton
                onPress={() => deleteTrip(trip.id)}
                text={t("delete_trip")}
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
// TODO edit trip i edit event wydzielic do osobnego komponentu
export default EditTripForm;
