/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetDistrictRequest } from '../../models/get-district-request';

export interface AddressDistrictGet$Plain$Params {
  ID?: string;
}

export function addressDistrictGet$Plain(http: HttpClient, rootUrl: string, params?: AddressDistrictGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetDistrictRequest>>> {
  const rb = new RequestBuilder(rootUrl, addressDistrictGet$Plain.PATH, 'get');
  if (params) {
    rb.query('ID', params.ID, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GetDistrictRequest>>;
    })
  );
}

addressDistrictGet$Plain.PATH = '/Address/District';
