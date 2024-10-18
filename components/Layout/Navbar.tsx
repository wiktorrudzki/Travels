import React from "react";
import { View } from "../View";
import {
  Calendar,
  CalendarChecked,
  Search,
  SearchChecked,
  User,
  UserChecked,
} from "@/assets/icons";
import { StyleSheet } from "react-native";
import { EVENLY_FLEX, FULL_WIDTH, SHADOW, SPACING } from "@/constants/styles";
import NavbarIcon from "./NavbarIcon";
import { useTheme } from "native-base";

const Navbar = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container} backgroundColor={colors.white}>
      <NavbarIcon
        icon={<Search />}
        checkedIcon={<SearchChecked />}
        href="home"
      />
      <NavbarIcon
        icon={<Calendar />}
        checkedIcon={<CalendarChecked />}
        href="trips"
      />
      <NavbarIcon
        icon={<User />}
        checkedIcon={<UserChecked />}
        href="account"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FULL_WIDTH,
    ...EVENLY_FLEX,
    ...SHADOW,
    paddingTop: SPACING.MEDIUM,
    paddingBottom: SPACING.LARGE,
  },
});

export default Navbar;
