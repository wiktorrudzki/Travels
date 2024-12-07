import { AxiosResponse, AxiosResponseHeaders } from "axios";
import { useState } from "react";

const usePromiseWithLoading = <T extends unknown[], A>(
  creator: (...args: T) => Promise<AxiosResponse<A>>,
  onSuccess?: (data: A, headers: AxiosResponseHeaders) => void,
  onFailure?: (err: string) => void
) => {
  const [{ runBefore, isLoading }, setIsLoading] = useState<{
    runBefore: boolean;
    isLoading: boolean;
  }>({ runBefore: false, isLoading: false });

  const invoker = async (...args: T) => {
    setIsLoading({ runBefore: true, isLoading: true });

    return creator(...args)
      .then((d) => {
        if (onSuccess) {
          onSuccess(d.data, d.headers as AxiosResponseHeaders);
        }
      })
      .catch((e) => {
        if (onFailure) {
          onFailure(
            typeof e.response?.data === "string" ? e.response.data : e.message
          );
        }
      })
      .finally(() => setIsLoading({ runBefore: true, isLoading: false }));
  };

  return [invoker, isLoading, runBefore] as const;
};

export default usePromiseWithLoading;
