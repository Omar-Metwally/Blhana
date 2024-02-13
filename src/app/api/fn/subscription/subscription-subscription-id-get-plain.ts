/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetSubscriptionRequest } from '../../models/get-subscription-request';

export interface SubscriptionSubscriptionIdGet$Plain$Params {
  SubscriptionID: string;
}

export function subscriptionSubscriptionIdGet$Plain(http: HttpClient, rootUrl: string, params: SubscriptionSubscriptionIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
  const rb = new RequestBuilder(rootUrl, subscriptionSubscriptionIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('SubscriptionID', params.SubscriptionID, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetSubscriptionRequest>;
    })
  );
}

subscriptionSubscriptionIdGet$Plain.PATH = '/Subscription/{SubscriptionID}';
