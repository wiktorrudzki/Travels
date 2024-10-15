import { RouteValues } from "@/types/routes";
import { Href, useRouter as useRouterNative } from "expo-router";

const useRouter = () => {
  const router = useRouterNative();

  const replace = (path: RouteValues) => router.replace(path as Href);

  const push = (path: RouteValues) => router.push(path as Href);

  return { router, replace, push };
};

export default useRouter;
