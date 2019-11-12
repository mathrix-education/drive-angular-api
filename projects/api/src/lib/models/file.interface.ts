import {BaseId} from './base-id';

/**
 * The fileInterface describe how a file is structured
 * Interface is added because File is a reserved name
 */

export interface FileInterface extends BaseId {
  basename: string;
  dirname: string;
  extension: string;
  filename: string;
  size: number;
  timestamp: number;
  mimetype: string;
  type: number;
  url: string;
}
