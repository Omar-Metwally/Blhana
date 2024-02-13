/* tslint:disable */
/* eslint-disable */
import { GetSubscriptionDayDataRequest } from '../models/get-subscription-day-data-request';
import { SubscriptionStatus } from '../models/subscription-status';
export interface GetSubscriptionRequest {
  from?: string | null;
  getSubscriptionDayDataRequests?: Array<GetSubscriptionDayDataRequest> | null;
  subscriptionID?: string;
  subscriptionStatus?: SubscriptionStatus;
  to?: string | null;
  totalAmount?: number | null;
}
