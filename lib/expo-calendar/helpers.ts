import * as Calendar from "expo-calendar";
import { Platform } from "react-native";

export const requestCalendarPermissions = async () => {
  const { status } = await Calendar.requestCalendarPermissionsAsync();
  return status === "granted";
};

export const createCalendarEvent = async (
  calendarEvent: Partial<Calendar.Calendar>
) => {
  const permissionGranted = await requestCalendarPermissions();

  if (!permissionGranted) {
    return;
  }

  const defaultCalendarSource =
    Platform.OS === "ios"
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: "Expo Calendar" };

  // {
  //   title: "Expo Calendar",
  //   color: "blue",
  //   entityType: Calendar.EntityTypes.EVENT,
  //   sourceId: defaultCalendarSource.id,
  //   source: defaultCalendarSource,
  //   name: "internalCalendarName",
  //   ownerAccount: "personal",
  //   accessLevel: Calendar.CalendarAccessLevel.OWNER,
  // }

  const newCalendarID = await Calendar.createCalendarAsync(calendarEvent);
  console.log(`Your new calendar ID is: ${newCalendarID}`);
};

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}
