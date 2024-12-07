import { useSignedInNavigation } from "@/hooks";
import { RootStackSignedInPropsList } from "@/types/routes";
import { useRoute } from "@react-navigation/native";
import { Pressable } from "native-base";
import React, { useMemo } from "react";

type Props = {
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
  href: keyof RootStackSignedInPropsList;
  checkedRoutes?: (keyof RootStackSignedInPropsList)[];
};

const NavbarIcon = ({ icon, checkedIcon, href, checkedRoutes }: Props) => {
  const route = useRoute();

  const { push } = useSignedInNavigation();

  const isIconChecked = useMemo(
    () =>
      checkedRoutes
        ? checkedRoutes.includes(route.name as keyof RootStackSignedInPropsList)
        : route.name === href,
    [route.name, checkedRoutes, href]
  );

  return (
    <Pressable onPress={() => push(href)}>
      {isIconChecked ? checkedIcon : icon}
    </Pressable>
  );
};

export default NavbarIcon;
