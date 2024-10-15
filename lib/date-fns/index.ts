import { format, getDate } from "date-fns";

const today = new Date();

export const formatToDate = (date: string | Date | number | undefined) =>
  format(date || today, "dd.MM.yyyy");

export const getDaysArray = (start: Date, end: Date) => {
  const arr: Date[] = [];
  const dt = new Date(start);

  while (dt <= end) {
    console.log(dt);
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }

  return arr;
};

export const formatToDayName = (date: string | Date | number) =>
  format(date, "eeee");

export const getDayOfTheMonth = (date: string | Date | number) => getDate(date);
