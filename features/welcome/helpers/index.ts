import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkFirstLaunch = async (callback: () => void) => {
  try {
    const isFirstLaunch = await AsyncStorage.getItem("isFirstLaunch");
    if (isFirstLaunch !== null) {
      await AsyncStorage.setItem("isFirstLaunch", "false");
      callback();
    }
  } catch (error) {
    console.error("Failed to fetch data from AsyncStorage", error);
  }
};
