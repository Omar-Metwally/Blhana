/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStreetRequest } from '../../models/get-street-request';

export interface AddressStreetGet$Plain$Params {
  ID?: string;
}

export function addressStreetGet$Plain(http: HttpClient, rootUrl: string, params?: AddressStreetGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetStreetRequest>>> {
  const rb = new RequestBuilder(rootUrl, addressStreetGet$Plain.PATH, 'get');
  if (params) {
    rb.query('ID', params.ID, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GetStreetRequest>>;
    })
  );
}

addressStreetGet$Plain.PATH = '/Address/Street';
