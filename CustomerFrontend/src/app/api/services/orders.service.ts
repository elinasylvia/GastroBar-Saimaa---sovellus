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

import { Order } from '../models/order';
import { OrderDto } from '../models/order-dto';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrdersGet
   */
  static readonly ApiOrdersGetPath = '/api/Orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Order>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Order>> {

    return this.apiOrdersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Order>>) => r.body as Array<Order>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Order>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Order>> {

    return this.apiOrdersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Order>>) => r.body as Array<Order>)
    );
  }

  /**
   * Path part for operation apiOrdersPost
   */
  static readonly ApiOrdersPostPath = '/api/Orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrdersPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersPostPath, 'post');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrdersPost$Plain(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<Order> {

    return this.apiOrdersPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrdersPost$Json$Response(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersPostPath, 'post');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrdersPost$Json(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<Order> {

    return this.apiOrdersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation apiOrdersIdGet
   */
  static readonly ApiOrdersIdGetPath = '/api/Orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersIdGetPath, 'get');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Order> {

    return this.apiOrdersIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersIdGetPath, 'get');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Order> {

    return this.apiOrdersIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation apiOrdersIdPut
   */
  static readonly ApiOrdersIdPutPath = '/api/Orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrdersIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Order
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersIdPutPath, 'put');
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrdersIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Order
  }
): Observable<void> {

    return this.apiOrdersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiOrdersIdDelete
   */
  static readonly ApiOrdersIdDeletePath = '/api/Orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersIdDeletePath, 'delete');
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiOrdersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiOrdersTableTablenumberGet
   */
  static readonly ApiOrdersTableTablenumberGetPath = '/api/Orders/table/{tablenumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersTableTablenumberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablenumberGet$Plain$Response(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersTableTablenumberGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OrderDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersTableTablenumberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablenumberGet$Plain(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<Array<OrderDto>> {

    return this.apiOrdersTableTablenumberGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderDto>>) => r.body as Array<OrderDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersTableTablenumberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablenumberGet$Json$Response(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersTableTablenumberGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OrderDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersTableTablenumberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablenumberGet$Json(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<Array<OrderDto>> {

    return this.apiOrdersTableTablenumberGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderDto>>) => r.body as Array<OrderDto>)
    );
  }

  /**
   * Path part for operation apiOrdersTableTablesTablenumberGet
   */
  static readonly ApiOrdersTableTablesTablenumberGetPath = '/api/Orders/table/tables/{tablenumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersTableTablesTablenumberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablesTablenumberGet$Plain$Response(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersTableTablesTablenumberGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OrderDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersTableTablesTablenumberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablesTablenumberGet$Plain(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<Array<OrderDto>> {

    return this.apiOrdersTableTablesTablenumberGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderDto>>) => r.body as Array<OrderDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrdersTableTablesTablenumberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablesTablenumberGet$Json$Response(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ApiOrdersTableTablesTablenumberGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OrderDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrdersTableTablesTablenumberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrdersTableTablesTablenumberGet$Json(params: {
    tablenumber: string;
    context?: HttpContext
  }
): Observable<Array<OrderDto>> {

    return this.apiOrdersTableTablesTablenumberGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrderDto>>) => r.body as Array<OrderDto>)
    );
  }

}
