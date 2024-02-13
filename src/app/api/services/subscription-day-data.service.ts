/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { subscriptionDayDataDelete } from '../fn/subscription-day-data/subscription-day-data-delete';
import { SubscriptionDayDataDelete$Params } from '../fn/subscription-day-data/subscription-day-data-delete';
import { subscriptionDayDataPatch } from '../fn/subscription-day-data/subscription-day-data-patch';
import { SubscriptionDayDataPatch$Params } from '../fn/subscription-day-data/subscription-day-data-patch';
import { subscriptionDayDataPost } from '../fn/subscription-day-data/subscription-day-data-post';
import { SubscriptionDayDataPost$Params } from '../fn/subscription-day-data/subscription-day-data-post';
import { subscriptionDayDataPost$Plain } from '../fn/subscription-day-data/subscription-day-data-post-plain';
import { SubscriptionDayDataPost$Plain$Params } from '../fn/subscription-day-data/subscription-day-data-post-plain';
import { subscriptionDayDataPut } from '../fn/subscription-day-data/subscription-day-data-put';
import { SubscriptionDayDataPut$Params } from '../fn/subscription-day-data/subscription-day-data-put';

@Injectable({ providedIn: 'root' })
export class SubscriptionDayDataService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `subscriptionDayDataPut()` */
  static readonly SubscriptionDayDataPutPath = '/SubscriptionDayData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionDayDataPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPut$Response(params?: SubscriptionDayDataPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return subscriptionDayDataPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionDayDataPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPut(params?: SubscriptionDayDataPut$Params, context?: HttpContext): Observable<void> {
    return this.subscriptionDayDataPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `subscriptionDayDataPost()` */
  static readonly SubscriptionDayDataPostPath = '/SubscriptionDayData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionDayDataPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPost$Plain$Response(params?: SubscriptionDayDataPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return subscriptionDayDataPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionDayDataPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPost$Plain(params?: SubscriptionDayDataPost$Plain$Params, context?: HttpContext): Observable<string> {
    return this.subscriptionDayDataPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionDayDataPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPost$Response(params?: SubscriptionDayDataPost$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return subscriptionDayDataPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionDayDataPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPost(params?: SubscriptionDayDataPost$Params, context?: HttpContext): Observable<string> {
    return this.subscriptionDayDataPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `subscriptionDayDataDelete()` */
  static readonly SubscriptionDayDataDeletePath = '/SubscriptionDayData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionDayDataDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataDelete$Response(params?: SubscriptionDayDataDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return subscriptionDayDataDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionDayDataDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataDelete(params?: SubscriptionDayDataDelete$Params, context?: HttpContext): Observable<void> {
    return this.subscriptionDayDataDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `subscriptionDayDataPatch()` */
  static readonly SubscriptionDayDataPatchPath = '/SubscriptionDayData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionDayDataPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPatch$Response(params?: SubscriptionDayDataPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return subscriptionDayDataPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionDayDataPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionDayDataPatch(params?: SubscriptionDayDataPatch$Params, context?: HttpContext): Observable<void> {
    return this.subscriptionDayDataPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
