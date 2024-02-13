/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Governorate } from '../../models/governorate';

export interface AddressGovernorateGet$Plain$Params {
}

export function addressGovernorateGet$Plain(http: HttpClient, rootUrl: string, params?: AddressGovernorateGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Governorate>>> {
  const rb = new RequestBuilder(rootUrl, addressGovernorateGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Governorate>>;
    })
  );
}

addressGovernorateGet$Plain.PATH = '/Address/Governorate';
