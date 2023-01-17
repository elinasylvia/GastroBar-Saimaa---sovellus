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

import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductsGet
   */
  static readonly ApiProductsGetPath = '/api/Products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Products>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Products>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Products>> {

    return this.apiProductsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Products>>) => r.body as Array<Products>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Products>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Products>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Products>> {

    return this.apiProductsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Products>>) => r.body as Array<Products>)
    );
  }

  /**
   * Path part for operation apiProductsPost
   */
  static readonly ApiProductsPostPath = '/api/Products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Products
  }
): Observable<StrictHttpResponse<Products>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsPostPath, 'post');
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
        return r as StrictHttpResponse<Products>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsPost$Plain(params?: {
    context?: HttpContext
    body?: Products
  }
): Observable<Products> {

    return this.apiProductsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Products>) => r.body as Products)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsPost$Json$Response(params?: {
    context?: HttpContext
    body?: Products
  }
): Observable<StrictHttpResponse<Products>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsPostPath, 'post');
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
        return r as StrictHttpResponse<Products>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsPost$Json(params?: {
    context?: HttpContext
    body?: Products
  }
): Observable<Products> {

    return this.apiProductsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Products>) => r.body as Products)
    );
  }

  /**
   * Path part for operation apiProductsIdGet
   */
  static readonly ApiProductsIdGetPath = '/api/Products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Products>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsIdGetPath, 'get');
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
        return r as StrictHttpResponse<Products>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Products> {

    return this.apiProductsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Products>) => r.body as Products)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Products>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsIdGetPath, 'get');
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
        return r as StrictHttpResponse<Products>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Products> {

    return this.apiProductsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Products>) => r.body as Products)
    );
  }

  /**
   * Path part for operation apiProductsIdPut
   */
  static readonly ApiProductsIdPutPath = '/api/Products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Products
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiProductsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductsIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Products
  }
): Observable<void> {

    return this.apiProductsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiProductsIdDelete
   */
  static readonly ApiProductsIdDeletePath = '/api/Products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductsService.ApiProductsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiProductsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductsIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiProductsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
