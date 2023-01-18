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

import { Item } from '../models/item';
import { ItemDto } from '../models/item-dto';

@Injectable({
  providedIn: 'root',
})
export class ItemsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiItemsGet
   */
  static readonly ApiItemsGetPath = '/api/Items';

  /**
   * Hakee kaikki tuotteet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Plain$Response(params?: {
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * Hakee kaikki tuotteet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Plain(params?: {
    context?: HttpContext
  }
  ): Observable<Array<ItemDto>> {

    return this.apiItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * Hakee kaikki tuotteet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Json$Response(params?: {
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * Hakee kaikki tuotteet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Json(params?: {
    context?: HttpContext
  }
  ): Observable<Array<ItemDto>> {

    return this.apiItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * Path part for operation apiItemsPost
   */
  static readonly ApiItemsPostPath = '/api/Items';

  /**
   * Luo uuden item/tuotteen.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Item
  }
  ): Observable<StrictHttpResponse<Item>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsPostPath, 'post');
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
        return r as StrictHttpResponse<Item>;
      })
    );
  }

  /**
   * Luo uuden item/tuotteen.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Plain(params?: {
    context?: HttpContext
    body?: Item
  }
  ): Observable<Item> {

    return this.apiItemsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Item>) => r.body as Item)
    );
  }

  /**
   * Luo uuden item/tuotteen.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Json$Response(params?: {
    context?: HttpContext
    body?: Item
  }
  ): Observable<StrictHttpResponse<Item>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsPostPath, 'post');
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
        return r as StrictHttpResponse<Item>;
      })
    );
  }

  /**
   * Luo uuden item/tuotteen.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Json(params?: {
    context?: HttpContext
    body?: Item
  }
  ): Observable<Item> {

    return this.apiItemsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Item>) => r.body as Item)
    );
  }

  /**
   * Path part for operation apiItemsIdGet
   */
  static readonly ApiItemsIdGetPath = '/api/Items/{id}';

  /**
   * Hakee tuotteen id:n perusteella.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdGetPath, 'get');
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
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * Hakee tuotteen id:n perusteella.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
  ): Observable<ItemDto> {

    return this.apiItemsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Hakee tuotteen id:n perusteella.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdGetPath, 'get');
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
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * Hakee tuotteen id:n perusteella.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
  ): Observable<ItemDto> {

    return this.apiItemsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Path part for operation apiItemsIdPut
   */
  static readonly ApiItemsIdPutPath = '/api/Items/{id}';

  /**
   * Muokkaa tuotteen tietoja id:n avulla.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Item
  }
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdPutPath, 'put');
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
   * Muokkaa tuotteen tietoja id:n avulla.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Item
  }
  ): Observable<void> {

    return this.apiItemsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiItemsIdDelete
   */
  static readonly ApiItemsIdDeletePath = '/api/Items/{id}';

  /**
   * Poistaa tuotteen.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdDeletePath, 'delete');
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
   * Poistaa tuotteen.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete(params: {
    id: number;
    context?: HttpContext
  }
  ): Observable<void> {

    return this.apiItemsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiItemsFoodQueryGet
   */
  static readonly ApiItemsFoodQueryGetPath = '/api/Items/food/{query}';

  /**
   * Hakee tuotteen hakusanan perusteella esim. juustohampurilainen.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsFoodQueryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsFoodQueryGet$Plain$Response(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsFoodQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * Hakee tuotteen hakusanan perusteella esim. juustohampurilainen.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsFoodQueryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsFoodQueryGet$Plain(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<ItemDto> {

    return this.apiItemsFoodQueryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Hakee tuotteen hakusanan perusteella esim. juustohampurilainen.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsFoodQueryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsFoodQueryGet$Json$Response(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsFoodQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * Hakee tuotteen hakusanan perusteella esim. juustohampurilainen.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsFoodQueryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsFoodQueryGet$Json(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<ItemDto> {

    return this.apiItemsFoodQueryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Path part for operation apiItemsOneQueryGet
   */
  static readonly ApiItemsOneQueryGetPath = '/api/Items/one/{query}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsOneQueryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsOneQueryGet$Plain$Response(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsOneQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsOneQueryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsOneQueryGet$Plain(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<ItemDto> {

    return this.apiItemsOneQueryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsOneQueryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsOneQueryGet$Json$Response(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsOneQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsOneQueryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsOneQueryGet$Json(params: {
    query: string;
    context?: HttpContext
  }
  ): Observable<ItemDto> {

    return this.apiItemsOneQueryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

}
