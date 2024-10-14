import { login } from "@/dal/auth";
import { useAuth, usePromise } from "@/hooks";
import { toaster } from "@/lib/native-base";

const useTravels = () => {
  const [getAll] = usePromise();
};

export default useTravels;
