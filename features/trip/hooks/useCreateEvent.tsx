import { createEvent } from "@/dal/event";
import { usePromiseWithLoading, useSignedInNavigation } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { EventForm } from "@/types/event";
import { useTranslation } from "react-i18next";
import { date, object, ref, string } from "yup";

const useCreateEvent = () => {
  const { t } = useTranslation(["common", "trips"]);

  const { goBack } = useSignedInNavigation();

  const success = () => {
    toaster({ text: t("trips:create_success"), variant: "success" });
    goBack();
  };

  const failure = (e: string) => toaster({ text: e, variant: "danger" });

  const [create, isLoading] = usePromiseWithLoading(
    createEvent,
    success,
    failure
  );

  const schema = object().shape({
    name: string()
      .required(t("common:required_field"))
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
    create({
      ...values,
      start: new Date(values.start),
      end: new Date(values.end),
    });

  return { schema, isLoading, onSubmit };
};

export default useCreateEvent;
