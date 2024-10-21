import { editEvent } from "@/dal/event";
import { usePromiseWithLoading } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { EventForm } from "@/types/event";
import { useTranslation } from "react-i18next";
import { date, object, ref, string } from "yup";

const useEditEvent = (eventId: string) => {
  const { t } = useTranslation(["common", "trips"]);

  const success = () => {
    toaster({ text: t("trips:edit_success"), variant: "success" });
  };

  const failure = (e: string) => toaster({ text: e, variant: "danger" });

  const [edit, isLoading] = usePromiseWithLoading(editEvent, success, failure);

  const schema = object().shape({
    name: string()
      .required()
      .max(
        100,
        t("common:max_characters", {
          length: 100,
        })
      ),
    description: string()
      .optional()
      .max(
        500,
        t("common:max_characters", {
          length: 500,
        })
      ),
    tripId: string().required(t("common:required_field")),
    start: date().required(),
    end: date().required().min(ref("start"), t("common:end_after_start")),
  });

  const onSubmit = (values: EventForm) =>
    edit({
      ...values,
      id: eventId,
      start: new Date(values.start),
      end: new Date(values.end),
    });

  return { schema, isLoading, onSubmit };
};

// TODO USUNAC STREFY CZASOWE Z BAZY DANYCH, DODAC SCROLLOWANIE EVENTOW W APLIKACJI, DODAC OPIS DO WYDARZEN W BAZIE, DODAC UCZESTNIKOW WYJAZDU DO FORMULARZA

export default useEditEvent;
