import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { ROUTES } from "@/constants/routes";
import { StyleSheet } from "react-native";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text text="Oops! Looks like you got lost. Content not found" />
      <Link href={ROUTES.home}>
        <Text text="come back" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
