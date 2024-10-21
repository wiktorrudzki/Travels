import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { CreateEvent } from "@/features/trip/components";
import { useTrip } from "@/features/trip/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

const CreateEventScreen = () => {
  const { t } = useTranslation(["trips", "common"]);

  const { trip } = useTrip();

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            text: trip.title,
          }}
          title={t("trips:create_event")}
        />
      }
    >
      <CreateEvent />
    </AuthorizedLayout>
  );
};

export default CreateEventScreen;
