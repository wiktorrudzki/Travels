import { deleteTrip } from "@/dal/trip";
import { usePromiseWithLoading } from "@/hooks";
import { toaster } from "@/lib/native-base";
import { useTranslation } from "react-i18next";
import { useTrips } from "./useTrips";

const useDeleteTrip = () => {
  const { t } = useTranslation("trips");

  const { deleteTrip: deleteOne } = useTrips();

  const success = (id: string) => {
    toaster({ text: t("delete_trip_success"), variant: "success" });
    deleteOne(id);
  };

  const failure = (e: string) => {
    toaster({ text: e, variant: "danger" });
  };

  const [removeTrip, isLoading] = usePromiseWithLoading(
    deleteTrip,
    success,
    failure
  );

  return { deleteTrip: removeTrip, isLoading };
};

export default useDeleteTrip;
