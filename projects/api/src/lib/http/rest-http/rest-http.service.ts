import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PaginatedResponse} from '../../responses/paginated-response';
import {environment} from '../../environment';
import {BaseId} from '../../models/base-id';
import {SuccessResponse} from '../../responses/success-response';
import {DataResponse} from '../../responses/data-response';

export abstract class RestHttpService<T extends BaseId> {
  readonly api: string;
  protected readonly whitelist: string[];

  constructor(protected http: HttpClient, readonly base: string = '/') {
    this.api = environment.api;
  }

  /**
   * Strip a model based on the whitelist
   */
  protected strip(model) {
    const clone = {...model};
    Object.keys(clone).forEach((key: string) => {
      if (!this.whitelist.includes(key)) {
        delete clone[key];
      }
    });

    return clone;
  }

  /**
   * Paginate models
   */
  index(page: number = 0, perPage: number = 100): Observable<PaginatedResponse<T>> {
    return this.http.get<PaginatedResponse<T>>(`${this.api}${this.base}?page=${page}&perPage=${perPage}`);
  }

  /**
   * Post a new model
   */
  post(data: any): Observable<DataResponse<T>> {
    return this.http.post<DataResponse<T>>(`${this.api}${this.base}`, this.strip(data));
  }

  /**
   * Get a model by id
   */
  get(id: string | number): Observable<DataResponse<T>> {
    return this.http.get<DataResponse<T>>(`${this.api}${this.base}/${id}`);
  }

  /**
   * Patch a model by id
   */
  patch(id: string | number, data: any): Observable<DataResponse<T>> {
    return this.http.patch<DataResponse<T>>(`${this.api}${this.base}/${id}`, this.strip(data));
  }

  /**
   * Delete a model
   */
  delete(id: string | number): Observable<SuccessResponse> {
    return this.http.delete<SuccessResponse>(`${this.api}${this.base}/${id}`);
  }

  /**
   * Get a model, using `field` as selector.
   */
  protected getBy(field: string, value: string | number): Observable<PaginatedResponse<T> | DataResponse<T>> {
    return this.http.get<PaginatedResponse<T> | DataResponse<T>>(`${this.api}${this.base}/${field}/${value}`);
  }

  /**
   * Patch a model, using `field` as selector.
   */
  protected patchBy(field: string, value: string | number, data: any): Observable<T> {
    return this.http.patch<T>(`${this.api}${this.base}/${field}/${value}`, data);
  }

  /**
   * Delete a model, using `field` as selector.
   */
  protected deleteBy(field: string, value: string | number): Observable<SuccessResponse> {
    return this.http.delete<SuccessResponse>(`${this.api}${this.base}/${field}/${value}`);
  }

  /**
   * Get related models
   */
  protected getRelated<U>(id: string | number, relation: string, page: number, perPage: number) {
    return this.http.get<PaginatedResponse<U>>(`${this.api}${this.base}/${id}/${relation}?page=${page}&perPage=${perPage}`);
  }

  /**
   * Patch related models
   */
  protected patchRelated<U>(id: string | number, relation: string, ids: number[] | string[]) {
    return this.http.patch<PaginatedResponse<U>>(`${this.api}${this.base}/${id}/${relation}`, ids);
  }
}

