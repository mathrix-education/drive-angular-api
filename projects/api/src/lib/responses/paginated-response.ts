/**
 * Describes how a paginated response is created
 */
import {DataResponse} from './data-response';

export interface PaginatedResponse<T> extends DataResponse<T[]> {
  page: number;
  per_page: number;
  total: number;
}
