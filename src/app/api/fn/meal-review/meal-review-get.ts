/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetMealReviewRequest } from '../../models/get-meal-review-request';

export interface MealReviewGet$Params {
  id?: string;
}

export function mealReviewGet(http: HttpClient, rootUrl: string, params?: MealReviewGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetMealReviewRequest>>> {
  const rb = new RequestBuilder(rootUrl, mealReviewGet.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GetMealReviewRequest>>;
    })
  );
}

mealReviewGet.PATH = '/MealReview';
