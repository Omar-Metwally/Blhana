/* tslint:disable */
/* eslint-disable */
import { CreateSubscriptionMealOptionRequest } from '../models/create-subscription-meal-option-request';
export interface CreateSubscriptionDayDataRequest {
  createSubscriptionMealOptionRequests?: Array<CreateSubscriptionMealOptionRequest> | null;
  deliveryDate?: string;
  subscriptionID?: string;
}
