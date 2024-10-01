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
import { COLORS } from "@/constants/colors";
import { ROUTES } from "@/constants/routes";
import NavbarIcon from "./NavbarIcon";

const Navbar = () => (
  <View style={styles.container}>
    <NavbarIcon
      icon={<Search />}
      checkedIcon={<SearchChecked />}
      href={ROUTES.home}
    />
    <NavbarIcon
      icon={<Calendar />}
      checkedIcon={<CalendarChecked />}
      href={ROUTES.travels}
    />
    <NavbarIcon
      icon={<User />}
      checkedIcon={<UserChecked />}
      href={ROUTES.account}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...FULL_WIDTH,
    ...EVENLY_FLEX,
    ...SHADOW,
    backgroundColor: COLORS.white,
    paddingTop: SPACING.MEDIUM,
    paddingBottom: SPACING.LARGE,
  },
});

export default Navbar;
