import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

const usePromiseWithLoading = <T extends unknown[], A>(
  creator: (...args: T) => Promise<AxiosResponse<A>>,
  onSuccess?: (data: A) => void,
  onFailure?: (err: AxiosError) => void
) => {
  const [{ runBefore, isLoading }, setIsLoading] = useState<{
    runBefore: boolean;
    isLoading: boolean;
  }>({ runBefore: false, isLoading: false });

  const invoker = async (...args: T) => {
    setIsLoading({ runBefore: true, isLoading: true });

    return creator(...args)
      .then(({ data }) => {
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((e) => {
        if (onFailure) {
          onFailure(e);
        }
      })
      .finally(() => setIsLoading({ runBefore: true, isLoading: false }));
  };

  return [invoker, isLoading, runBefore] as const;
};

export default usePromiseWithLoading;
