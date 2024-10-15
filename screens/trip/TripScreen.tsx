import { AuthorizedLayout } from "@/components/Layout";
import { TabBadge } from "@/components/TabBadge";
import { View } from "@/components/View";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "@/hooks";
import { useTrip } from "@/features/trip/hooks";
import { Spinner } from "native-base";
import { ROUTES } from "@/constants/routes";

const TripScreen = () => {
  const { t } = useTranslation("trips");

  const { replace } = useRouter();

  const { trip, isLoading, runBefore } = useTrip();

  if (isLoading || !runBefore) {
    return <Spinner size="lg" />;
  }

  if (trip == undefined) {
    replace("not-found");
    return null;
  }

  return (
    <AuthorizedLayout
      title={
        <TabBadge
          goBack={{
            href: ROUTES.trips,
            text: t("trips"),
          }}
          title={trip?.title}
        />
      }
    >
      <View></View>
    </AuthorizedLayout>
  );
};
//todo zamienić wszędzie na react-navigation zamiast expo-router
export default TripScreen;
