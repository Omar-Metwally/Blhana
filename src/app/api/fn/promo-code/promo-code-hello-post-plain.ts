/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateCustomersPromoCodes } from '../../models/create-customers-promo-codes';
import { GetSubscriptionRequest } from '../../models/get-subscription-request';

export interface PromoCodeHelloPost$Plain$Params {
  Hello: string;
      body?: CreateCustomersPromoCodes
}

export function promoCodeHelloPost$Plain(http: HttpClient, rootUrl: string, params: PromoCodeHelloPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
  const rb = new RequestBuilder(rootUrl, promoCodeHelloPost$Plain.PATH, 'post');
  if (params) {
    rb.path('Hello', params.Hello, {});
    rb.body(params.body, 'application/*+json');
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

promoCodeHelloPost$Plain.PATH = '/PromoCode/{Hello}';
