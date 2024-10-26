import { Participant } from "@/types/trip";

export const toParticipantData = ({
  firstName,
  lastName,
  guid,
}: Participant) => ({
  label: `${firstName} ${lastName}`,
  value: guid,
});
