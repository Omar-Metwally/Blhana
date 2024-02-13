/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthModel } from '../../models/auth-model';

export interface AuthRefreshTokenGet$Plain$Params {
}

export function authRefreshTokenGet$Plain(http: HttpClient, rootUrl: string, params?: AuthRefreshTokenGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
  const rb = new RequestBuilder(rootUrl, authRefreshTokenGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthModel>;
    })
  );
}

authRefreshTokenGet$Plain.PATH = '/Auth/refreshToken';
