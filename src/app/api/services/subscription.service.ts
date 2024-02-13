/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { GetSubscriptionRequest } from '../models/get-subscription-request';
import { subscriptionPost } from '../fn/subscription/subscription-post';
import { SubscriptionPost$Params } from '../fn/subscription/subscription-post';
import { subscriptionPost$Plain } from '../fn/subscription/subscription-post-plain';
import { SubscriptionPost$Plain$Params } from '../fn/subscription/subscription-post-plain';
import { subscriptionPut } from '../fn/subscription/subscription-put';
import { SubscriptionPut$Params } from '../fn/subscription/subscription-put';
import { subscriptionSubscriptionIdGet } from '../fn/subscription/subscription-subscription-id-get';
import { SubscriptionSubscriptionIdGet$Params } from '../fn/subscription/subscription-subscription-id-get';
import { subscriptionSubscriptionIdGet$Plain } from '../fn/subscription/subscription-subscription-id-get-plain';
import { SubscriptionSubscriptionIdGet$Plain$Params } from '../fn/subscription/subscription-subscription-id-get-plain';

@Injectable({ providedIn: 'root' })
export class SubscriptionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `subscriptionSubscriptionIdGet()` */
  static readonly SubscriptionSubscriptionIdGetPath = '/Subscription/{SubscriptionID}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionSubscriptionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  subscriptionSubscriptionIdGet$Plain$Response(params: SubscriptionSubscriptionIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return subscriptionSubscriptionIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionSubscriptionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subscriptionSubscriptionIdGet$Plain(params: SubscriptionSubscriptionIdGet$Plain$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.subscriptionSubscriptionIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionSubscriptionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  subscriptionSubscriptionIdGet$Response(params: SubscriptionSubscriptionIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return subscriptionSubscriptionIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionSubscriptionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subscriptionSubscriptionIdGet(params: SubscriptionSubscriptionIdGet$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.subscriptionSubscriptionIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

  /** Path part for operation `subscriptionPut()` */
  static readonly SubscriptionPutPath = '/Subscription';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionPut$Response(params?: SubscriptionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return subscriptionPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionPut(params?: SubscriptionPut$Params, context?: HttpContext): Observable<void> {
    return this.subscriptionPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `subscriptionPost()` */
  static readonly SubscriptionPostPath = '/Subscription';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionPost$Plain$Response(params?: SubscriptionPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return subscriptionPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionPost$Plain(params?: SubscriptionPost$Plain$Params, context?: HttpContext): Observable<string> {
    return this.subscriptionPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subscriptionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionPost$Response(params?: SubscriptionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return subscriptionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `subscriptionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subscriptionPost(params?: SubscriptionPost$Params, context?: HttpContext): Observable<string> {
    return this.subscriptionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
