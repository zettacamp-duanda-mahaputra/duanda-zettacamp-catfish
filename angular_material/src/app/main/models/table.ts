import { Companies } from "./companies";

export interface Table{
  _id:string,
  email:string,
  civility:string,
  first_name:string,
  last_name:string,
  company:Companies,
  user_status:string,
  count_document:number
}