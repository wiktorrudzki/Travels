import { AxiosError, AxiosResponse } from "axios";

const usePromise = <T extends unknown[], A>(
  creator: (...args: T) => Promise<AxiosResponse<A>>,
  onSuccess?: (data: A) => void,
  onFailure?: (err: string) => void
) => {
  const invoker = async (...args: T) =>
    creator(...args)
      .then(({ data }) => {
        setTimeout(() => {}, 2000);
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((e: AxiosError) => {
        if (onFailure) {
          onFailure(
            typeof e.response?.data === "string" ? e.response.data : e.message
          );
        }
      });

  return [invoker] as const;
};

export default usePromise;
