import { editTrip } from "@/dal/trip";
import { usePromiseWithLoading, useSignedInNavigation } from "@/hooks";
import { addHour } from "@/lib/date-fns";
import { toaster } from "@/lib/native-base";
import { TripForm } from "@/types/trip";
import { useTranslation } from "react-i18next";
import { array, date, object, ref, string } from "yup";

const useEditTrip = (tripId: string) => {
  const { t } = useTranslation(["common", "trips"]);

  const { replace } = useSignedInNavigation();

  const success = () => {
    toaster({ text: t("trips:edit_success"), variant: "success" });
    replace("trip", { id: tripId });
  };

  const failure = (e: string) => toaster({ text: e, variant: "danger" });

  const [edit, isLoading] = usePromiseWithLoading(editTrip, success, failure);

  const schema = object().shape({
    title: string()
      .required()
      .max(
        100,
        t("common:max_characters", {
          length: 100,
        })
      ),
    start: date().required(),
    end: date().required().min(ref("start"), t("common:end_after_start")),
    participants: array().of(string()),
  });

  const onSubmit = (values: TripForm) =>
    edit({
      ...values,
      id: tripId,
      start: addHour(new Date(values.start)),
      end: addHour(new Date(values.end)),
    });

  return { schema, isLoading, onSubmit };
};

export default useEditTrip;
