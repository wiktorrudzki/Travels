import React from "react";
import { View as NativeBaseView } from "native-base";

type Props = React.ComponentPropsWithRef<typeof NativeBaseView>;

const View = (props: Props) => <NativeBaseView {...props} />;

export default View;
