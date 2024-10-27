import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { PrimaryButton } from "../Button";
import { useTranslation } from "react-i18next";
import TextInput from "./TextInput";
import { formatToDateTime } from "@/lib/date-fns";
import TextInputWithError from "./TextInputWithError";
import { View } from "../View";

type Props = {
  placeholder?: string;
  nativeID: string;
};

const NativeDatePicker = ({ placeholder, nativeID }: Props) => {
  const { t } = useTranslation();

  const [date, setDate] = useState<Date>(new Date(1598051730000));
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: "date" | "time") => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView>
      <View style={{ display: "flex" }}>
        <PrimaryButton
          style={{ width: "50%" }}
          onPress={showDatepicker}
          text={t("choose_date")}
        />
        <PrimaryButton
          style={{ width: "50%" }}
          onPress={showTimepicker}
          text={t("choose_time")}
        />
      </View>
      <TextInputWithError
        placeholder={placeholder}
        error={undefined}
        nativeID={nativeID}
        isDisabled
        value={formatToDateTime(date)}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};

export default NativeDatePicker;
