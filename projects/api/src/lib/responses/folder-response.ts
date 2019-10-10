import {Directory} from '../models/directory';
import {FileInterface} from '../models/file.interface';

export interface FolderResponse {
  directories: Directory[];
  files: FileInterface[];
}
