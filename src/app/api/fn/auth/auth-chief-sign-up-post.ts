/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthModel } from '../../models/auth-model';

export interface AuthChiefSignUpPost$Params {
      body?: {
'PhoneNumber'?: string;
'BuildingID'?: string;
'Image'?: Blob;
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Password'?: string;
}
}

export function authChiefSignUpPost(http: HttpClient, rootUrl: string, params?: AuthChiefSignUpPost$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
  const rb = new RequestBuilder(rootUrl, authChiefSignUpPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

authChiefSignUpPost.PATH = '/Auth/ChiefSignUp';
