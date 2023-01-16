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

import { Table } from '../models/table';

@Injectable({
  providedIn: 'root',
})
export class TablesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTablesGet
   */
  static readonly ApiTablesGetPath = '/api/Tables';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Table>>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Table>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTablesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Table>> {

    return this.apiTablesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Table>>) => r.body as Array<Table>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Table>>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Table>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTablesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Table>> {

    return this.apiTablesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Table>>) => r.body as Array<Table>)
    );
  }

  /**
   * Path part for operation apiTablesPost
   */
  static readonly ApiTablesPostPath = '/api/Tables';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTablesPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Table
  }
): Observable<StrictHttpResponse<Table>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesPostPath, 'post');
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
        return r as StrictHttpResponse<Table>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTablesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTablesPost$Plain(params?: {
    context?: HttpContext
    body?: Table
  }
): Observable<Table> {

    return this.apiTablesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Table>) => r.body as Table)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTablesPost$Json$Response(params?: {
    context?: HttpContext
    body?: Table
  }
): Observable<StrictHttpResponse<Table>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesPostPath, 'post');
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
        return r as StrictHttpResponse<Table>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTablesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTablesPost$Json(params?: {
    context?: HttpContext
    body?: Table
  }
): Observable<Table> {

    return this.apiTablesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Table>) => r.body as Table)
    );
  }

  /**
   * Path part for operation apiTablesIdGet
   */
  static readonly ApiTablesIdGetPath = '/api/Tables/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Table>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesIdGetPath, 'get');
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
        return r as StrictHttpResponse<Table>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTablesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Table> {

    return this.apiTablesIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Table>) => r.body as Table)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Table>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesIdGetPath, 'get');
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
        return r as StrictHttpResponse<Table>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTablesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Table> {

    return this.apiTablesIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Table>) => r.body as Table)
    );
  }

  /**
   * Path part for operation apiTablesIdPut
   */
  static readonly ApiTablesIdPutPath = '/api/Tables/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTablesIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Table
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiTablesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTablesIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Table
  }
): Observable<void> {

    return this.apiTablesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiTablesIdDelete
   */
  static readonly ApiTablesIdDeletePath = '/api/Tables/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTablesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TablesService.ApiTablesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiTablesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTablesIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiTablesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
