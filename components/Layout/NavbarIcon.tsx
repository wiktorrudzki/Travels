import { useSignedInNavigation } from "@/hooks";
import { RootStackSignedInPropsList } from "@/types/routes";
import { useRoute } from "@react-navigation/native";
import { Pressable } from "native-base";
import React from "react";

type Props = {
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
  href: keyof RootStackSignedInPropsList;
};

const NavbarIcon = ({ icon, checkedIcon, href }: Props) => {
  const route = useRoute();

  const { push } = useSignedInNavigation();

  return route.name === href ? (
    checkedIcon
  ) : (
    <Pressable onPress={() => push(href)}>{icon}</Pressable>
  );
};

export default NavbarIcon;
