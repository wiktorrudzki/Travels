import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { extendTheme, NativeBaseProvider, ColorMode } from "native-base";
import { COLORS } from "@/constants/colors";

const newColorTheme = COLORS;
const theme = extendTheme({ colors: newColorTheme });

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Stack>
        <Slot />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(authorized)" options={{ headerShown: false }} />
        <Stack.Screen name="(unauthorized)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </NativeBaseProvider>
  );
}
