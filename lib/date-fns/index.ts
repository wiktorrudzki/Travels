import { compareAsc, format, getDate, isEqual, startOfDay } from "date-fns";

type Convertable = string | Date | number;

const today = new Date();

export const formatToDate = (date: Convertable | undefined) =>
  format(date || today, "dd.MM.yyyy");

export const formatToHttpDate = (date: Convertable | undefined) =>
  format(date || today, "yyyy-MM-dd");

export const getDaysArray = (start: Date, end: Date) => {
  const arr: Date[] = [];
  const dt = new Date(start);

  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }

  return arr;
};

export const formatToDayName = (date: Convertable) => format(date, "eeee");

export const getDayOfTheMonth = (date: Convertable) => getDate(date);

export const formatToTime = (date: Convertable, lang: string = "pl") =>
  lang === "pl" ? format(date, "HH:mm") : format(date, "hh:mm");

export const areDatesSame = (date1: Convertable, date2: Convertable) =>
  isEqual(startOfDay(date1), startOfDay(date2));

export const formatToDateTime = (date: Convertable) =>
  `${formatToDate(date)} ${formatToTime(date)}`;
