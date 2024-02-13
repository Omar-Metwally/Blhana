/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetMealRequest } from '../../models/get-meal-request';

export interface MealsMealIdGet$Params {
  MealID: string;
}

export function mealsMealIdGet(http: HttpClient, rootUrl: string, params: MealsMealIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMealRequest>> {
  const rb = new RequestBuilder(rootUrl, mealsMealIdGet.PATH, 'get');
  if (params) {
    rb.path('MealID', params.MealID, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetMealRequest>;
    })
  );
}

mealsMealIdGet.PATH = '/Meals/{MealID}';
