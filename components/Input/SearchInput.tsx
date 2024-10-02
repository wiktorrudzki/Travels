import { CloseIcon, Input, Pressable, SearchIcon } from "native-base";
import React, { useState } from "react";

type Props = React.ComponentPropsWithRef<typeof Input>;

const SearchInput = (props: Props) => {
  const [value, setValue] = useState("");

  return (
    <Input
      variant="underlined"
      value={value}
      onChangeText={setValue}
      paddingLeft="2"
      InputLeftElement={<SearchIcon size="lg" />}
      InputRightElement={
        value.length > 0 ? (
          <Pressable onPress={() => setValue("")}>
            <CloseIcon size="lg" />
          </Pressable>
        ) : undefined
      }
      size="2xl"
      {...props}
    />
  );
};

export default SearchInput;
