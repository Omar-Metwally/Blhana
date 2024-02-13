/* tslint:disable */
/* eslint-disable */
import { OrderStatus } from '../models/order-status';
export interface GetSubscriptionDayDataRequest {
  deliveryDate?: string;
  mealName?: string | null;
  mealOptionID?: string;
  orderStatus?: OrderStatus;
  price?: number | null;
  quantity?: number;
}
