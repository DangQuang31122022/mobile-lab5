import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import S1 from "../screens/s1";
import Screen01 from "../screens/s2";
import S2 from "../screens/s2";

const RootStack = createNativeStackNavigator({
  screens: {
    s1: S1,
    s2: S2,
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;
