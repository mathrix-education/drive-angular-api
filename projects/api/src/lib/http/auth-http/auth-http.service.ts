import {Injectable} from '@angular/core';
import {environment} from '../../environment';
import {SuccessResponse} from '../../responses/success-response';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../responses/login-response';
import {DataResponse} from '../../responses/data-response';

/**
 * Auth Http Service
 * Handle all API interaction with uri starting with `/auth`
 */
@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  constructor(private http: HttpClient) {
  }

  /**
   * POST /auth/login
   * @param email The user email
   * @param password The user password
   */
  login(email: string, password: string): Observable<DataResponse<LoginResponse>> {
    return this.http.post<DataResponse<LoginResponse>>(`${environment.api}/auth/login`, {
        email: email,
        password: password
      }
    );
  }

  /**
   * POST /auth/forgot
   * Ask for a password reset email
   * @param email The user email
   */
  forgot(email: string) {
    return this.http.post<SuccessResponse>(`${environment.api}/auth/forgot`, {
      email: email
    });
  }

  /**
   * POST /auth/forgot
   * Change the user password using its password reset token
   * @param token The reset token
   * @param password The password
   */
  reset(token: string, password: string) {
    return this.http.post<{ email: string }>(`${environment.api}/auth/reset/${token}`, {
      password: password
    });
  }
}
