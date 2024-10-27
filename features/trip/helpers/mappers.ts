import { Participant } from "@/types/trip";

export const toOption = ({ firstName, lastName, guid }: Participant) => ({
  label: `${firstName} ${lastName}`,
  value: guid,
});

export const toParticipant = (value: string): Participant | undefined => {
  const pairs = value.split(";");

  const result: Record<string, string> = {};

  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    result[key] = value;
  });

  if (
    Object.hasOwn(result, "guid") &&
    Object.hasOwn(result, "firstName") &&
    Object.hasOwn(result, "lastName")
  ) {
    return result as Participant;
  }

  return undefined;
};
