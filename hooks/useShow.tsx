import { useCallback, useState } from "react";

const useShow = () => {
  const [show, setShow] = useState(false);

  const hide = useCallback(() => setShow(false), []);
  const display = useCallback(() => setShow(true), []);
  const swap = useCallback(() => setShow((prev) => !prev), []);

  return { show, hide, display, swap };
};

export default useShow;
