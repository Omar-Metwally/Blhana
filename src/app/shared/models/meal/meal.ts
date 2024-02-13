import { MealCategory, MealSpiceLevel } from "src/app/api/models";
import { mealOption } from "./mealOption";

export interface Meal {
    mealID: string;
    title: string;
    description: string;
    mealCategory?: MealCategory;
    mealSpiceLevel?: MealSpiceLevel;
    tagsID?: Array<string>;
    mealOptions: Array<mealOption>;
}