/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateSubscriptionMealOptionQuantityRequest } from '../../models/update-subscription-meal-option-quantity-request';

export interface SubscriptionDayDataPatch$Params {
      body?: UpdateSubscriptionMealOptionQuantityRequest
}

export function subscriptionDayDataPatch(http: HttpClient, rootUrl: string, params?: SubscriptionDayDataPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, subscriptionDayDataPatch.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

subscriptionDayDataPatch.PATH = '/SubscriptionDayData';
