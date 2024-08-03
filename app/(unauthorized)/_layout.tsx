import { Slot } from "expo-router";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import "react-native-reanimated";

export default function UnauthorizedLayout() {
  return (
    <View backgroundColor="light.50" style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
