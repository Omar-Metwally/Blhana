/* tslint:disable */
/* eslint-disable */
import { GetMealOptionRequest } from '../models/get-meal-option-request';
import { GetMealTagRequest } from '../models/get-meal-tag-request';
export interface GetMealRequest {
  chiefID?: string | null;
  chiefImage?: string | null;
  chiefName?: string | null;
  description?: string | null;
  getMealOptionsRequest?: Array<GetMealOptionRequest> | null;
  mealID?: string;
  mealName?: string | null;
  mealTags?: Array<GetMealTagRequest> | null;
  rating?: number | null;
}
