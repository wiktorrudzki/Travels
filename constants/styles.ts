import { TextStyle, ViewStyle } from "react-native";
import { COLORS } from "./colors";

export const DISABLED = 0.6;

export const CENTER_FLEX: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

export const EVENLY_FLEX: ViewStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "row",
};

export const FLEX_COLUMN: ViewStyle = {
  display: "flex",
  flexDirection: "column",
};

export const FULL_WIDTH: ViewStyle = {
  width: "100%",
};

export const FULL_HEIGHT: ViewStyle = {
  height: "100%",
};

export const FULL_SPACE: ViewStyle = {
  ...FULL_HEIGHT,
  ...FULL_WIDTH,
};

export const ALIGN_TOP: ViewStyle = {
  position: "absolute",
  top: 0,
};

export const ALIGN_BOTTOM: ViewStyle = {
  position: "absolute",
  bottom: 0,
};

export const ALIGN_LEFT: ViewStyle = {
  position: "absolute",
  left: 0,
};

export const ALIGN_RIGHT: ViewStyle = {
  position: "absolute",
  right: 0,
};

export const SPACING = {
  TINY: 4,
  SMALL: 8,
  MEDIUM: 16,
  LARGE: 24,
  HUGE: 32,
  GIGANTIC: 40,
  MASSIVE: 48,
};

export const SHADOW: ViewStyle = {
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.25,
  shadowRadius: 15,
  elevation: 5,
};

export const ICON_SHADOW: ViewStyle = {
  shadowOffset: { width: 0, height: -1 },
  shadowOpacity: 1,
  shadowRadius: 0,
  shadowColor: COLORS.primary[400],
  elevation: 5,
};

export const ROUNDED: ViewStyle = {
  borderRadius: 100,
};

export const SEMI_BOLD = 500;
export const BOLD = 700;

export const SEMI_BOLD_TITLE: TextStyle = {
  fontSize: SPACING.HUGE,
  lineHeight: SPACING.HUGE,
  fontWeight: SEMI_BOLD,
};
