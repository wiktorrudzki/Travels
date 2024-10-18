import { RootStackUnsignedInPropsList } from "@/types/routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const useUnsignedInNavigation = () =>
  useNavigation<StackNavigationProp<RootStackUnsignedInPropsList>>();

export default useUnsignedInNavigation;
