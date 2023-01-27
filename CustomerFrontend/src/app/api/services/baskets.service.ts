/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Basket } from '../models/basket';
import { BasketDto } from '../models/basket-dto';

@Injectable({
  providedIn: 'root',
})
export class BasketsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiBasketsGet
   */
  static readonly ApiBasketsGetPath = '/api/Baskets';

  /**
   * Hae kaikki basketit.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BasketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BasketDto>>;
      })
    );
  }

  /**
   * Hae kaikki basketit.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<BasketDto>> {

    return this.apiBasketsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BasketDto>>) => r.body as Array<BasketDto>)
    );
  }

  /**
   * Hae kaikki basketit.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BasketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BasketDto>>;
      })
    );
  }

  /**
   * Hae kaikki basketit.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<BasketDto>> {

    return this.apiBasketsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BasketDto>>) => r.body as Array<BasketDto>)
    );
  }

  /**
   * Path part for operation apiBasketsPost
   */
  static readonly ApiBasketsPostPath = '/api/Baskets';

  /**
   * Luo uusi.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBasketsPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Basket
  }
): Observable<StrictHttpResponse<Basket>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Basket>;
      })
    );
  }

  /**
   * Luo uusi.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBasketsPost$Plain(params?: {
    context?: HttpContext
    body?: Basket
  }
): Observable<Basket> {

    return this.apiBasketsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Basket>) => r.body as Basket)
    );
  }

  /**
   * Luo uusi.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBasketsPost$Json$Response(params?: {
    context?: HttpContext
    body?: Basket
  }
): Observable<StrictHttpResponse<Basket>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Basket>;
      })
    );
  }

  /**
   * Luo uusi.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBasketsPost$Json(params?: {
    context?: HttpContext
    body?: Basket
  }
): Observable<Basket> {

    return this.apiBasketsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Basket>) => r.body as Basket)
    );
  }

  /**
   * Path part for operation apiBasketsTableTablenumberGet
   */
  static readonly ApiBasketsTableTablenumberGetPath = '/api/Baskets/table/{tablenumber}';

  /**
   * Haetaan kaikki tilaukset poytanumeron perusteella.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsTableTablenumberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsTableTablenumberGet$Plain$Response(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BasketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsTableTablenumberGetPath, 'get');
    if (params) {
      rb.path('tablenumber', params.tablenumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BasketDto>>;
      })
    );
  }

  /**
   * Haetaan kaikki tilaukset poytanumeron perusteella.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsTableTablenumberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsTableTablenumberGet$Plain(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<Array<BasketDto>> {

    return this.apiBasketsTableTablenumberGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BasketDto>>) => r.body as Array<BasketDto>)
    );
  }

  /**
   * Haetaan kaikki tilaukset poytanumeron perusteella.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsTableTablenumberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsTableTablenumberGet$Json$Response(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BasketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsTableTablenumberGetPath, 'get');
    if (params) {
      rb.path('tablenumber', params.tablenumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BasketDto>>;
      })
    );
  }

  /**
   * Haetaan kaikki tilaukset poytanumeron perusteella.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsTableTablenumberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsTableTablenumberGet$Json(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<Array<BasketDto>> {

    return this.apiBasketsTableTablenumberGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BasketDto>>) => r.body as Array<BasketDto>)
    );
  }

  /**
   * Path part for operation apiBasketsIdGet
   */
  static readonly ApiBasketsIdGetPath = '/api/Baskets/{id}';

  /**
   * Hae yksi id:n perusteella.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BasketDto>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BasketDto>;
      })
    );
  }

  /**
   * Hae yksi id:n perusteella.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<BasketDto> {

    return this.apiBasketsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BasketDto>) => r.body as BasketDto)
    );
  }

  /**
   * Hae yksi id:n perusteella.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BasketDto>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BasketDto>;
      })
    );
  }

  /**
   * Hae yksi id:n perusteella.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<BasketDto> {

    return this.apiBasketsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BasketDto>) => r.body as BasketDto)
    );
  }

  /**
   * Path part for operation apiBasketsIdPut
   */
  static readonly ApiBasketsIdPutPath = '/api/Baskets/{id}';

  /**
   * Muokkaa baskettia.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBasketsIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Basket
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Muokkaa baskettia.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBasketsIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Basket
  }
): Observable<void> {

    return this.apiBasketsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiBasketsIdDelete
   */
  static readonly ApiBasketsIdDeletePath = '/api/Baskets/{id}';

  /**
   * Poista.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBasketsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasketsService.ApiBasketsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Poista.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBasketsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBasketsIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiBasketsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
