import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { AvaliationInterface } from "./AvaliationInterface";
import { UserModel } from "../User/UserInterface";

export interface AvaliationItemInterface {
  avaliationGivenByUser: string;
  avaliationRating: number;
  avaliationLocal: AvaliationInterface;
  user: UserModel;
  dateAvaliation: Date;
}
