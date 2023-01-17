/* tslint:disable */
/* eslint-disable */
import { Products } from './products';
export interface Order {
  id?: number;
  orderTime?: string;
  orders?: null | Array<Products>;
  status?: null | string;
  tableNumber?: null | string;
}
