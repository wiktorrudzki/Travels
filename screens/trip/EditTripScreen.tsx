import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { EditTripForm } from "@/features/trip/components";
import { useTripWithEvents } from "@/features/trip/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

const EditTripScreen = () => {
  const { t } = useTranslation(["trips", "common"]);

  const { trip } = useTripWithEvents();

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            to: { screen: "trip", params: { id: trip.id } },
            text: trip.title,
          }}
          title={t("trips:edit_trip")}
        />
      }
    >
      <EditTripForm />
    </AuthorizedLayout>
  );
};

export default EditTripScreen;
