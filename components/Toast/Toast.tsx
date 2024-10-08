import {
  Alert,
  CheckCircleIcon,
  InfoIcon,
  useTheme,
  WarningIcon,
  WarningTwoIcon,
} from "native-base";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Text } from "../Text";
import { CENTER_FLEX, SPACING } from "@/constants/styles";

type Props = {
  text: string;
  variant: "danger" | "warning" | "success" | "info";
};

const Toast = ({ text, variant }: Props) => {
  const { colors } = useTheme();

  const color = useMemo(() => {
    switch (variant) {
      case "danger":
        return colors.error;
      case "success":
        return colors.success;
      case "warning":
        return colors.warning;
      case "info":
        return colors.info;
      default:
        colors.warning;
    }
  }, []);

  const icon = useMemo(() => {
    switch (variant) {
      case "danger":
        return <WarningIcon color={color?.[400]} />;
      case "success":
        return <CheckCircleIcon color={color?.[400]} />;
      case "warning":
        return <WarningTwoIcon color={color?.[400]} />;
      case "info":
        return <InfoIcon color={color?.[400]} />;
      default:
        return <WarningTwoIcon color={color?.[400]} />;
    }
  }, []);

  return (
    <Alert
      style={styles.container}
      backgroundColor={color?.[100]}
      borderColor={color?.[400]}
    >
      {icon}
      <Text text={text} />
    </Alert>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CENTER_FLEX,
    gap: SPACING.MEDIUM,
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Toast;
