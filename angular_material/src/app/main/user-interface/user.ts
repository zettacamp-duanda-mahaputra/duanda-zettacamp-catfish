import { Address } from "./address";

export interface User {
  id: String;
  name: String;
  age: Number;
  gender:string;
  email:string;
  position:string;
  martialstatus:string;
  addresses: Address;
}