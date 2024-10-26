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
        data={[
          {
            label: "111",
            value: "111",
          },
          {
            label: "222",
            value: "222",
          },
          {
            label: "333",
            value: "333",
          },
        ]}
        value={[]}
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
    gap: SPACING.MEDIUM,
  },
});

export default TripFormInputs;
