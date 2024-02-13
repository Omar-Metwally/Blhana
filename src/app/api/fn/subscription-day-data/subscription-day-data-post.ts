/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateSubscriptionDayDataRequest } from '../../models/create-subscription-day-data-request';

export interface SubscriptionDayDataPost$Params {
      body?: CreateSubscriptionDayDataRequest
}

export function subscriptionDayDataPost(http: HttpClient, rootUrl: string, params?: SubscriptionDayDataPost$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, subscriptionDayDataPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

subscriptionDayDataPost.PATH = '/SubscriptionDayData';
