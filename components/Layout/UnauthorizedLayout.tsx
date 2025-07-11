import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import React from "react";
import { StyleSheet } from "react-native";
import { WhiteLogo } from "@/assets/icons";
import "react-native-reanimated";
import { View } from "../View";

type Props = {
  title: string;
  children: React.ReactNode;
  otherActions: React.ReactNode;
};

const UnauthorizedLayout = ({ title, children, otherActions }: Props) => (
  <View paddingY="20" style={styles.container}>
    <View
      backgroundColor="primary.400"
      rounded="full"
      style={styles.backgroundCircle}
    />

    <View height="1/4">
      <WhiteLogo />
    </View>

    <View height="3/4" width="full" justifyContent="center" alignItems="center">
      <View maxHeight="90%" width="80%">
        <Card>
          <View style={styles.cardContent}>
            <Text
              textAlign="center"
              fontSize="2xl"
              fontWeight="semibold"
              text={title}
            />
            {children}
          </View>
        </Card>
      </View>
      <View height="25%" justifyContent="center" alignItems="center">
        {otherActions}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
  },
  backgroundCircle: {
    position: "absolute",
    top: "-440%",
    width: "500%",
    height: "500%",
    zIndex: -1,
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
    gap: 24,
  },
});

export default UnauthorizedLayout;
