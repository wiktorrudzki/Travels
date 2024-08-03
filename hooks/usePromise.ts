import { AxiosError, AxiosResponse } from "axios";

const usePromise = <T extends unknown[], A>(
  creator: (...args: T) => Promise<AxiosResponse<A>>,
  onSuccess?: (data: AxiosResponse<A>) => void,
  onFailure?: (err: AxiosError) => void
) => {
  const invoker = async (...args: T) =>
    creator(...args)
      .then((data) => {
        setTimeout(() => {}, 2000);
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((e) => {
        if (onFailure) {
          onFailure(e);
        }
      });

  return [invoker] as const;
};

export default usePromise;
