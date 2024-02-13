/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetMealRequest } from '../../models/get-meal-request';

export interface MealsMealIdGet$Plain$Params {
  MealID: string;
}

export function mealsMealIdGet$Plain(http: HttpClient, rootUrl: string, params: MealsMealIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMealRequest>> {
  const rb = new RequestBuilder(rootUrl, mealsMealIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('MealID', params.MealID, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetMealRequest>;
    })
  );
}

mealsMealIdGet$Plain.PATH = '/Meals/{MealID}';
