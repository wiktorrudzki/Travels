import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { extendTheme, NativeBaseProvider } from "native-base";
import "@/lib/i18n";
import { AuthProvider } from "@/hooks";
import { Navigation } from "@/features/navigation";
import { COLORS } from "@/constants/colors";
import { LITTLE_ROUNDED } from "@/constants/styles";

const newColorTheme = COLORS;
const theme = extendTheme({
  colors: newColorTheme,
  components: {
    Menu: {
      baseStyle: {
        ...LITTLE_ROUNDED,
      },
    },
  },
});

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
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
