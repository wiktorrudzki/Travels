import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { extendTheme, NativeBaseProvider, Text } from "native-base";
import "@/lib/i18n";
import { COLORS } from "@/constants/colors";

const newColorTheme = COLORS;
const theme = extendTheme({ colors: newColorTheme });

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const DEFAULT_SCREEN_OPTIONS = { headerShown: false };

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
      <Stack screenOptions={DEFAULT_SCREEN_OPTIONS}>
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="account" />
        <Stack.Screen name="home" />
        <Stack.Screen name="travels" />
      </Stack>
    </NativeBaseProvider>
  );
}
