import { RouteValues } from "@/types/routes";
import { useRouter as useRouterNative } from "expo-router";

const useRouter = () => {
  const router = useRouterNative();

  const replace = (path: RouteValues) => router.replace(path);

  const push = (path: RouteValues) => router.push(path);

  return { router, replace, push };
};

export default useRouter;
