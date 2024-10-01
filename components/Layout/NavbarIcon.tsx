import { ROUTES } from "@/constants/routes";
import { usePathname, useRouter } from "@/hooks";
import { RouteValues } from "@/types/routes";
import { Pressable } from "native-base";
import React from "react";

type Props = {
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
  href: RouteValues;
};

const NavbarIcon = ({ icon, checkedIcon, href }: Props) => {
  const pathname = usePathname();

  const { push } = useRouter();

  return pathname === href ? (
    checkedIcon
  ) : (
    <Pressable onPress={() => push(href)}>{icon}</Pressable>
  );
};

export default NavbarIcon;
