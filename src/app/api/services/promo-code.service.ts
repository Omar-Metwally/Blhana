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
import { promoCodeHelloPost } from '../fn/promo-code/promo-code-hello-post';
import { PromoCodeHelloPost$Params } from '../fn/promo-code/promo-code-hello-post';
import { promoCodeHelloPost$Plain } from '../fn/promo-code/promo-code-hello-post-plain';
import { PromoCodeHelloPost$Plain$Params } from '../fn/promo-code/promo-code-hello-post-plain';
import { promoCodePost } from '../fn/promo-code/promo-code-post';
import { PromoCodePost$Params } from '../fn/promo-code/promo-code-post';
import { promoCodePost$Plain } from '../fn/promo-code/promo-code-post-plain';
import { PromoCodePost$Plain$Params } from '../fn/promo-code/promo-code-post-plain';
import { promoCodePut } from '../fn/promo-code/promo-code-put';
import { PromoCodePut$Params } from '../fn/promo-code/promo-code-put';
import { promoCodePut$Plain } from '../fn/promo-code/promo-code-put-plain';
import { PromoCodePut$Plain$Params } from '../fn/promo-code/promo-code-put-plain';

@Injectable({ providedIn: 'root' })
export class PromoCodeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `promoCodePut()` */
  static readonly PromoCodePutPath = '/PromoCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `promoCodePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePut$Plain$Response(params?: PromoCodePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return promoCodePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `promoCodePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePut$Plain(params?: PromoCodePut$Plain$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.promoCodePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `promoCodePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePut$Response(params?: PromoCodePut$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return promoCodePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `promoCodePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePut(params?: PromoCodePut$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.promoCodePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

  /** Path part for operation `promoCodePost()` */
  static readonly PromoCodePostPath = '/PromoCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `promoCodePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePost$Plain$Response(params?: PromoCodePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return promoCodePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `promoCodePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePost$Plain(params?: PromoCodePost$Plain$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.promoCodePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `promoCodePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePost$Response(params?: PromoCodePost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return promoCodePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `promoCodePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodePost(params?: PromoCodePost$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.promoCodePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

  /** Path part for operation `promoCodeHelloPost()` */
  static readonly PromoCodeHelloPostPath = '/PromoCode/{Hello}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `promoCodeHelloPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodeHelloPost$Plain$Response(params: PromoCodeHelloPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return promoCodeHelloPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `promoCodeHelloPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodeHelloPost$Plain(params: PromoCodeHelloPost$Plain$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.promoCodeHelloPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `promoCodeHelloPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodeHelloPost$Response(params: PromoCodeHelloPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSubscriptionRequest>> {
    return promoCodeHelloPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `promoCodeHelloPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  promoCodeHelloPost(params: PromoCodeHelloPost$Params, context?: HttpContext): Observable<GetSubscriptionRequest> {
    return this.promoCodeHelloPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSubscriptionRequest>): GetSubscriptionRequest => r.body)
    );
  }

}
