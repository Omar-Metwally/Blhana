/* tslint:disable */
/* eslint-disable */
import { MealCategory } from '../models/meal-category';
import { MealSpiceLevel } from '../models/meal-spice-level';
export interface CreateMealRequest {
  description?: string | null;
  mealCategory?: MealCategory;
  mealSpiceLevel?: MealSpiceLevel;
  name?: string | null;
  tagsID?: Array<string> | null;
}
