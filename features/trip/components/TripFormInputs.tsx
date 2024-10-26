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
import { TripForm } from "@/types/trip";
import { useTripWithEvents, useUserFriends } from "../hooks";
import { useState } from "react";
import { toParticipantData } from "../helpers/mappers";
import { toaster } from "@/lib/native-base";
import QRCodeScanner from "react-native-qrcode-scanner";
import { PrimaryButton } from "@/components/Button";

type Props = FormikProps<TripForm>;

const TripFormInputs = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  setFieldValue,
}: Props) => {
  const { t } = useTranslation(["trips", "common"]);

  const toStringDate = (e: DateTimePickerEvent) =>
    new Date(e.nativeEvent.timestamp).toString();

  const { trip } = useTripWithEvents();

  const { friends } = useUserFriends();

  const [participants, setParticipants] = useState(
    trip.participants.map(({ guid }) => guid)
  );
  const [data, setData] = useState(
    friends.concat(trip.owner).map(toParticipantData)
  );

  const [showQRScanner, setShowQRScanner] = useState(false);

  const onParticipantsChange = (updated: string[]) => {
    if (!updated.includes(trip.owner.guid)) {
      toaster({ text: t("trips:cannot_delete_owner"), variant: "danger" });
      return;
    }

    setParticipants(updated);
    setFieldValue("participants", updated);
  };

  return showQRScanner ? (
    <QRCodeScanner
      onRead={(e) => console.log(e)}
      // onRead={this.onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      // topContent={
      //   <Text style={styles.centerText}>
      //     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{" "}
      //     on your computer and scan the QR code.
      //   </Text>
      // }
      // bottomContent={
      //   <TouchableOpacity style={styles.buttonTouchable}>
      //     <Text style={styles.buttonText}>OK. Got it!</Text>
      //   </TouchableOpacity>
      // }
    />
  ) : (
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
        value={participants}
        onChange={onParticipantsChange}
      />
      <PrimaryButton
        onPress={() => setShowQRScanner(true)}
        text={t("trips:add_participant_out_of_list")}
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
      />{" "}
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
