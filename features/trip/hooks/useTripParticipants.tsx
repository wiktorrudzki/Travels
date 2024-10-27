import { Option } from "@/components/Input";
import { toaster } from "@/lib/native-base";
import { Participant, TripWithEvents } from "@/types/trip";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toOption, toParticipant } from "../helpers/mappers";
import { BarcodeScanningResult } from "expo-camera";

type Props = {
  initialOptions: Option[];
  initialParticipants: string[];
  trip: TripWithEvents;
  onParticipantAdd?: () => void;
};

const useTripParticipants = ({
  trip,
  initialOptions,
  initialParticipants,
  onParticipantAdd,
}: Props) => {
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const [participants, setParticipants] =
    useState<string[]>(initialParticipants);

  console.log(initialOptions, initialParticipants);

  const { t } = useTranslation("trips");

  const onParticipantsChange = (updated: string[]) => {
    if (!updated.includes(trip.owner.guid)) {
      toaster({
        text: t("trips:cannot_delete_owner"),
        variant: "danger",
      });

      return participants;
    }

    setParticipants(updated);
    return updated;
  };

  const onParticipantsFromOutListAdd = ({ data }: BarcodeScanningResult) => {
    const participant = toParticipant(data);

    if (participant == undefined) {
      toaster({ text: t("incorrect_qr"), variant: "danger" });
    } else {
      if (options.find((option) => option.value === participant.guid)) {
        toaster({ text: t("friend_already_on_list"), variant: "info" });
      } else {
        setOptions((prev) => prev.concat(toOption(participant)));
      }
    }

    onParticipantAdd && onParticipantAdd();
  };

  return {
    participants,
    options,
    onParticipantsChange,
    onParticipantsFromOutListAdd,
  };
};

export default useTripParticipants;
