import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

const usePromiseWithLoading = <T extends unknown[], A>(
  creator: (...args: T) => Promise<AxiosResponse<A>>,
  onSuccess?: (data: AxiosResponse<A>) => void,
  onFailure?: (err: AxiosError) => void
) => {
  const [isLoading, setIsLoading] = useState(false);

  const invoker = async (...args: T) => {
    setIsLoading(true);
    setTimeout(() => {}, 2000);

    return creator(...args)
      .then((data) => {
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((e) => {
        if (onFailure) {
          onFailure(e);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return [invoker, isLoading] as const;
};

export default usePromiseWithLoading;
