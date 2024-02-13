/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addressBuildingGet } from '../fn/address/address-building-get';
import { AddressBuildingGet$Params } from '../fn/address/address-building-get';
import { addressBuildingGet$Plain } from '../fn/address/address-building-get-plain';
import { AddressBuildingGet$Plain$Params } from '../fn/address/address-building-get-plain';
import { addressDistrictGet } from '../fn/address/address-district-get';
import { AddressDistrictGet$Params } from '../fn/address/address-district-get';
import { addressDistrictGet$Plain } from '../fn/address/address-district-get-plain';
import { AddressDistrictGet$Plain$Params } from '../fn/address/address-district-get-plain';
import { addressGovernorateGet } from '../fn/address/address-governorate-get';
import { AddressGovernorateGet$Params } from '../fn/address/address-governorate-get';
import { addressGovernorateGet$Plain } from '../fn/address/address-governorate-get-plain';
import { AddressGovernorateGet$Plain$Params } from '../fn/address/address-governorate-get-plain';
import { addressStreetGet } from '../fn/address/address-street-get';
import { AddressStreetGet$Params } from '../fn/address/address-street-get';
import { addressStreetGet$Plain } from '../fn/address/address-street-get-plain';
import { AddressStreetGet$Plain$Params } from '../fn/address/address-street-get-plain';
import { GetBuildingRequest } from '../models/get-building-request';
import { GetDistrictRequest } from '../models/get-district-request';
import { GetStreetRequest } from '../models/get-street-request';
import { Governorate } from '../models/governorate';

@Injectable({ providedIn: 'root' })
export class AddressService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addressGovernorateGet()` */
  static readonly AddressGovernorateGetPath = '/Address/Governorate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressGovernorateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressGovernorateGet$Plain$Response(params?: AddressGovernorateGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Governorate>>> {
    return addressGovernorateGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressGovernorateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressGovernorateGet$Plain(params?: AddressGovernorateGet$Plain$Params, context?: HttpContext): Observable<Array<Governorate>> {
    return this.addressGovernorateGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Governorate>>): Array<Governorate> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressGovernorateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressGovernorateGet$Response(params?: AddressGovernorateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Governorate>>> {
    return addressGovernorateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressGovernorateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressGovernorateGet(params?: AddressGovernorateGet$Params, context?: HttpContext): Observable<Array<Governorate>> {
    return this.addressGovernorateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Governorate>>): Array<Governorate> => r.body)
    );
  }

  /** Path part for operation `addressDistrictGet()` */
  static readonly AddressDistrictGetPath = '/Address/District';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressDistrictGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressDistrictGet$Plain$Response(params?: AddressDistrictGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetDistrictRequest>>> {
    return addressDistrictGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressDistrictGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressDistrictGet$Plain(params?: AddressDistrictGet$Plain$Params, context?: HttpContext): Observable<Array<GetDistrictRequest>> {
    return this.addressDistrictGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetDistrictRequest>>): Array<GetDistrictRequest> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressDistrictGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressDistrictGet$Response(params?: AddressDistrictGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetDistrictRequest>>> {
    return addressDistrictGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressDistrictGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressDistrictGet(params?: AddressDistrictGet$Params, context?: HttpContext): Observable<Array<GetDistrictRequest>> {
    return this.addressDistrictGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetDistrictRequest>>): Array<GetDistrictRequest> => r.body)
    );
  }

  /** Path part for operation `addressStreetGet()` */
  static readonly AddressStreetGetPath = '/Address/Street';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressStreetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressStreetGet$Plain$Response(params?: AddressStreetGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetStreetRequest>>> {
    return addressStreetGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressStreetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressStreetGet$Plain(params?: AddressStreetGet$Plain$Params, context?: HttpContext): Observable<Array<GetStreetRequest>> {
    return this.addressStreetGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetStreetRequest>>): Array<GetStreetRequest> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressStreetGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressStreetGet$Response(params?: AddressStreetGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetStreetRequest>>> {
    return addressStreetGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressStreetGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressStreetGet(params?: AddressStreetGet$Params, context?: HttpContext): Observable<Array<GetStreetRequest>> {
    return this.addressStreetGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetStreetRequest>>): Array<GetStreetRequest> => r.body)
    );
  }

  /** Path part for operation `addressBuildingGet()` */
  static readonly AddressBuildingGetPath = '/Address/Building';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressBuildingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressBuildingGet$Plain$Response(params?: AddressBuildingGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetBuildingRequest>>> {
    return addressBuildingGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressBuildingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressBuildingGet$Plain(params?: AddressBuildingGet$Plain$Params, context?: HttpContext): Observable<Array<GetBuildingRequest>> {
    return this.addressBuildingGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetBuildingRequest>>): Array<GetBuildingRequest> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addressBuildingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressBuildingGet$Response(params?: AddressBuildingGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetBuildingRequest>>> {
    return addressBuildingGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addressBuildingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addressBuildingGet(params?: AddressBuildingGet$Params, context?: HttpContext): Observable<Array<GetBuildingRequest>> {
    return this.addressBuildingGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetBuildingRequest>>): Array<GetBuildingRequest> => r.body)
    );
  }

}
