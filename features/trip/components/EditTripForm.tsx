import { Formik } from "formik";
import React, { useMemo } from "react";
import {
  useEditTrip,
  useTripParticipants,
  useTripWithEvents,
  useUserFriends,
} from "../hooks";
import { FormControl, ScrollView } from "native-base";
import {
  FLEX_COLUMN,
  SCROLLABLE_FORM_WITH_TAB_BADGE_PADDING_BOTTOM,
  SPACING,
} from "@/constants/styles";
import { StyleSheet } from "react-native";
import { LoadingSpinner } from "@/components/Spinner";
import { TripForm } from "@/types/trip";
import { useDeleteTrip } from "@/features/trips/hooks";
import TripFormInputs from "./TripFormInputs";
import { useScanQR, useSignedInNavigation } from "@/hooks";
import { toOption } from "../helpers/mappers";
import AddParticipantByQR from "./AddParticipantByQR";
import EditTripButtons from "./EditTripButtons";

const EditTripForm = () => {
  const { trip } = useTripWithEvents();

  const { showQRScanner, onQRScannerAcessRequest, hideScanner } = useScanQR();

  const { friends } = useUserFriends();

  console.log(trip);

  const {
    participants,
    options,
    onParticipantsChange,
    onParticipantsFromOutListAdd,
  } = useTripParticipants({
    trip,
    initialOptions: friends.concat(trip.owner).map(toOption),
    initialParticipants: trip.participants.map(({ guid }) => guid),
    onParticipantAdd: hideScanner,
  });

  const { replace } = useSignedInNavigation();

  const { schema, isLoading: isLoadingEdit, onSubmit } = useEditTrip(trip.id);

  const { deleteTrip, isLoading: isLoadingDelete } = useDeleteTrip(() =>
    replace("trips")
  );

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
      {showQRScanner ? (
        <AddParticipantByQR
          onCancel={hideScanner}
          onScan={onParticipantsFromOutListAdd}
        />
      ) : (
        (props) => (
          <ScrollView contentContainerStyle={styles.scroll}>
            <FormControl isDisabled={!trip.isOwner} style={styles.form}>
              <TripFormInputs
                {...props}
                onParticipantsChange={onParticipantsChange}
                participants={participants}
                participantsOptions={options}
              />
              {trip.isOwner && (
                <EditTripButtons
                  isLoadingSubmit={isLoadingEdit}
                  onAddParticipantOutOfList={onQRScannerAcessRequest}
                  onSubmit={() => props.handleSubmit()}
                  onDelete={() => deleteTrip(trip.id)}
                />
              )}
            </FormControl>
          </ScrollView>
        )
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
// TODO edit trip i edit event wydzielic do osobnego komponentu
export default EditTripForm;
