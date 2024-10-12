import { AxiosError, AxiosResponse, AxiosResponseHeaders } from "axios";

const usePromise = <T extends unknown[], A>(
  creator: (...args: T) => Promise<AxiosResponse<A>>,
  onSuccess?: (data: A, headers: AxiosResponseHeaders) => void,
  onFailure?: (err: string) => void
) => {
  const invoker = async (...args: T) =>
    creator(...args)
      .then(({ data, headers }) => {
        setTimeout(() => {}, 2000);
        if (onSuccess) {
          onSuccess(data, headers as AxiosResponseHeaders);
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
