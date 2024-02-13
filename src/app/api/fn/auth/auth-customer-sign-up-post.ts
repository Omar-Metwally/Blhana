/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthModel } from '../../models/auth-model';
import { CustomerSignUpModel } from '../../models/customer-sign-up-model';

export interface AuthCustomerSignUpPost$Params {
      body?: CustomerSignUpModel
}

export function authCustomerSignUpPost(http: HttpClient, rootUrl: string, params?: AuthCustomerSignUpPost$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
  const rb = new RequestBuilder(rootUrl, authCustomerSignUpPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthModel>;
    })
  );
}

authCustomerSignUpPost.PATH = '/Auth/CustomerSignUp';
