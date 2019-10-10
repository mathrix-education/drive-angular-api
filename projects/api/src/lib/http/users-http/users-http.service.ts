import {User} from '../../models/user';
import {RestHttpService} from '../rest-http/rest-http.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PaginatedResponse} from '../../responses/paginated-response';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService extends RestHttpService<User> {

  protected readonly whitelist = ['first_name', 'last_name', 'email', 'username', 'password', 'settings', 'scopes'];

  constructor(protected http: HttpClient) {
    super(http, '/users');
  }

  /**
   * GET: users/{userId}/results/${resultType}
   * Return the results related to an user
   * @param userId: the user id
   * @param resultType: the result type of the series: exam or series
   * @param page: the requested page
   * @param perPage: the number of item per page
   */
  results(userId, resultType: 'exam' | 'series', page = 0, perPage = 1000) {
    return this.http.get(`${this.api}${this.base}/${userId}/results/${resultType}?page=${page}&perPage=${perPage}`);
  }

  /**
   * GET /users/search/{query}/{page}/{perPage}?order={order}&dir={dir}
   * Search for users matching a given query.
   *
   * @param query
   * @param page
   * @param perPage
   * @param options
   */
  neoSearch(query: string, page: number, perPage: number, options: any = {}) {
    // Serialize query string
    const params = [];
    Object.keys(options).forEach((key: string) => {
      const value = options[key];
      params.push(`${key}=${value}`);
    });
    const queryString = params.length > 0 ? '?' + params.join('&') : '';

    return this.http.get<PaginatedResponse<User>>(`${this.api}/users/search/${query}`);
  }


  /**
   * Get the available scopes from the api
   */
  scopes() {
    return this.http.get(`${this.api}/scopes`);
  }

}
