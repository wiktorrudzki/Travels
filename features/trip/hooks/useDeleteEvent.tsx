import { deleteEvent } from "@/dal/event";
import { usePromiseWithLoading, useSignedInNavigation } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { useTranslation } from "react-i18next";
import { useEvent } from "./useEvent";

const useDeleteEvent = () => {
  const { t } = useTranslation("trips");

  const {
    event: { trip },
  } = useEvent();

  const { replace } = useSignedInNavigation();

  const success = (id: string) => {
    toaster({ text: t("delete_trip_success"), variant: "success" });
    replace("trip", { id: trip.id });
  };

  const failure = (e: string) => {
    toaster({ text: e, variant: "danger" });
  };

  const [removeEvent, isLoading] = usePromiseWithLoading(
    deleteEvent,
    success,
    failure
  );

  return { deleteEvent: removeEvent, isLoading };
};

export default useDeleteEvent;
