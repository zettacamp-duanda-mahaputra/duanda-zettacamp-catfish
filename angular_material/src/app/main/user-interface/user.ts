import { Address } from "./address";

export interface User {
  id: string;
  name: string;
  age: number;
  gender:string;
  email:string;
  position:string;
  martialstatus:string;
  addresses: Address;
}