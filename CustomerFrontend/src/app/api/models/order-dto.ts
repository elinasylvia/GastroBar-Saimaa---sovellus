/* tslint:disable */
/* eslint-disable */
import { Products } from './products';
export interface OrderDto {
  orders?: null | Array<Products>;
  status?: null | string;
  tableNumber?: null | string;
}
