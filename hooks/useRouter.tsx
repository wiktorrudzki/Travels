import { RouteValues } from "@/types/routes";
import { useRouter as useRouterNative } from "expo-router";

const useRouter = () => {
  const router = useRouterNative();

  const replace = (path: RouteValues) => router.replace(path);

  return { router, replace };
};

export default useRouter;
