import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { AvaliationItemInterface } from "./AvaliationItemInterface";

export interface AvaliationInterface {
  idLocalAvaliation: number;
  name: string;
  avaliationRating: number;
  imageAvaliationLocal: string;
  avaliationItens: AvaliationItemInterface[];
}
