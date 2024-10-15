import { format } from "date-fns";

const today = new Date();

export const formatToDate = (date: string | Date | number | undefined) =>
  format(date || today, "dd.MM.yyyy");
