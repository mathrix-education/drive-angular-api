import {SuccessResponse} from './success-response';
import {BaseId} from '../models/base-id';

export interface ModelResponse<T extends BaseId> extends SuccessResponse {
  data: T;
}
