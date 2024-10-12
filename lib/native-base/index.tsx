import { Toast as ToastComponent } from "@/components/Toast";
import { Toast } from "native-base";
import React from "react";

export const toaster = (props: React.ComponentProps<typeof ToastComponent>) =>
  Toast.show({
    placement: "top",
    render: () => <ToastComponent {...props} />,
  });
