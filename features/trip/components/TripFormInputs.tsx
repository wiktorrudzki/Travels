import {
  DatePickerWithError,
  MultiSelect,
  TextInputWithError,
} from "@/components/Input";
import { View } from "@/components/View";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { FLEX_COLUMN, SPACING } from "@/constants/styles";
import { Participant, TripForm } from "@/types/trip";
import { useTripWithEvents, useUserFriends } from "../hooks";
import { useCallback, useMemo } from "react";

type Props = FormikProps<TripForm>;

const TripFormInputs = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  const toStringDate = (e: DateTimePickerEvent) =>
    new Date(e.nativeEvent.timestamp).toString();

  const { trip } = useTripWithEvents();

  const { friends } = useUserFriends();

  const toParticipantData = useCallback(
    ({ firstName, lastName, guid }: Participant) => ({
      label: `${firstName} ${lastName}`,
      value: guid,
    }),
    []
  );

  const participantsValue = useMemo(
    () => trip.participants.map(({ guid }) => guid),
    [trip]
  );

  console.log(friends, friends.concat(trip.owner).map(toParticipantData));

  const data = useMemo(
    () => friends.concat(trip.owner).map(toParticipantData),
    [friends, trip]
  );

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
        data={data}
        value={participantsValue}
        onChange={() => {}}
      />
      <DatePickerWithError
        error={touched.end ? errors.end : undefined}
        nativeID="start"
        value={new Date(values.start)}
        onChange={(e) => handleChange("start")(toStringDate(e))}
        mode="datetime"
        label={t("common:start")}
      />
      <DatePickerWithError
        error={touched.end ? errors.end : undefined}
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
    gap: SPACING.LARGE,
  },
});

// todo co zrobic jak ktos zmniejszy zakres trip start/end a event zostanie poza zakresem

export default TripFormInputs;
