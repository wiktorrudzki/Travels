import { Slot } from "expo-router";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import "react-native-reanimated";

export default function AuthorizedLayout() {
  return (
    <View style={styles.container}>
      <Text>authorized</Text>
      <Slot />
      <Text>authorized</Text>
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
