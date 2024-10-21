import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { EditEventForm } from "@/features/trip/components";
import { useEvent } from "@/features/trip/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

const EditEventScreen = () => {
  const { t } = useTranslation(["trips", "common"]);

  const {
    event: { trip },
  } = useEvent();

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            to: { screen: "trip", params: { id: trip.id } },
            text: trip.title,
          }}
          title={t("trips:edit_event")}
        />
      }
    >
      <EditEventForm />
    </AuthorizedLayout>
  );
};

export default EditEventScreen;
