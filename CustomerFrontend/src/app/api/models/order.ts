/* tslint:disable */
/* eslint-disable */
import { BasketDto } from './basket-dto';
export interface Order {
  id?: number;
  orderTime?: string;
  orders?: null | Array<BasketDto>;
  status?: null | string;
  tableNumber?: null | string;
}
