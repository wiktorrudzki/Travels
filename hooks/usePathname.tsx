import { RouteValues } from "@/types/routes";
import { usePathname as useExportRouterPathname } from "expo-router";

const usePathname = () => {
  const pathname = useExportRouterPathname() as RouteValues;

  return pathname;
};

export default usePathname;
