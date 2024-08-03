import { Slot } from "expo-router";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import "react-native-reanimated";

export default function UnauthorizedLayout() {
  return (
    <View style={styles.container}>
      <Text>unauthorized</Text>
      <Slot />
      <Text>unauthorized</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
});
