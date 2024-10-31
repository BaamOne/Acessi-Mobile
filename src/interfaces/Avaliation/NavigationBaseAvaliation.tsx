import { NavigationProp, RouteProp } from "@react-navigation/native";
import { AvaliationInterface } from "./AvaliationInterface";

export interface NavigationBaseAvaliation {
  navigation: NavigationProp<any>;
  route: RouteProp<{ params: { avaliation: AvaliationInterface } }, "params">;
}
