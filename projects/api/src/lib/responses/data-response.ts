import {SuccessResponse} from './success-response';

export interface DataResponse<T> extends SuccessResponse {
  data: T;
}
