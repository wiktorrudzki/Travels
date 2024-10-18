import { RootStackSignedInPropsList } from "@/types/routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const useSignedInNavigation = () =>
  useNavigation<StackNavigationProp<RootStackSignedInPropsList>>();

export default useSignedInNavigation;
