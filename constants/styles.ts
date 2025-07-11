import { ImageStyle, TextStyle, ViewStyle } from "react-native";
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

export const FULL_WIDTH_IMAGE: ImageStyle = {
  width: "100%",
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

export const LABEL_FONT_SIZE = 16;

export const SCROLLABLE_FORM_WITH_TAB_BADGE_PADDING_BOTTOM = 350;

export const SHADOW: ViewStyle = {
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 15,
  elevation: 5,
};

export const LITTLE_SHADOW: ViewStyle = {
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.04,
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

export const FULL_ROUNDED_IMAGE: ImageStyle = {
  borderRadius: 100,
};

export const LITTLE_ROUNDED: ViewStyle = {
  borderRadius: 25,
};

export const LITTLE_ROUNDED_IMAGE: ImageStyle = {
  borderRadius: 25,
};

export const SEMI_BOLD = 500;
export const BOLD = 700;

export const SEMI_BOLD_TITLE: TextStyle = {
  fontSize: SPACING.HUGE,
  lineHeight: SPACING.HUGE,
  fontWeight: SEMI_BOLD,
};

export const MAIN_CARD_TITLE: TextStyle = {
  fontSize: SPACING.LARGE,
  lineHeight: SPACING.LARGE,
  fontWeight: BOLD,
};

export const CARD_TITLE: TextStyle = {
  fontSize: SPACING.MEDIUM,
  lineHeight: SPACING.MEDIUM,
  fontWeight: BOLD,
};

export const DASH_BOTTOM: ViewStyle = {
  borderBottomWidth: 1,
  borderStyle: "solid",
};

export const BOLD_UPPERCASED_TITLE: TextStyle = {
  fontSize: SPACING.GIGANTIC / 2,
  lineHeight: SPACING.GIGANTIC / 2,
  fontWeight: BOLD,
  textTransform: "uppercase",
};
