import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Button";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  isLoadingSubmit?: boolean;
  onAddParticipantOutOfList: () => void;
  onSubmit: () => void;
  onDelete: () => void;
};

const EditTripButtons = ({
  isLoadingSubmit,
  onAddParticipantOutOfList,
  onSubmit,
  onDelete,
}: Props) => {
  const { t } = useTranslation("trips");

  return (
    <>
      <SecondaryButton
        onPress={onAddParticipantOutOfList}
        text={t("add_participant_out_of_list")}
      />
      <PrimaryButton
        isLoading={isLoadingSubmit}
        onPress={onSubmit}
        text={t("edit_trip")}
      />
      <DangerButton onPress={onDelete} text={t("delete_trip")} />
    </>
  );
};

export default EditTripButtons;
