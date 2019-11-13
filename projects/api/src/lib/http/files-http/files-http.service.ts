import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_CONFIG} from '../../api-config';
import {RestHttpService} from '../rest-http/rest-http.service';
import {FileInterface} from '../../models/file.interface';
import {Directory} from '../../models/directory';
import {DataResponse} from '../../responses/data-response';

@Injectable()
export class FilesHttpService extends RestHttpService<FileInterface> {
  protected readonly whitelist: string[] = ['destination'];

  constructor(protected http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {super(http, '/files', api);
  }

  list(directory: string = 'tests') {
    return this.get(`list/${directory}`);
  }

  /**
   * Upload a file to cdn
   * @return url on cdn
   */
  upload(file: File, destination: string, fileName: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.api}/files/${destination}/${fileName}`, formData)
      .pipe(map(req => req.data.url));
  }

  /**
   * get metadata of a file on cdn
   * @return url on cdn
   */

  metadata(directory: string) {
    return this.http.get(`files/${directory}`);
  }

  /**
   * move a file on cdn
   * @return url on cdn
   */

  move(file: string, newDestination: string) {
    return this.patch(`${file}`, {destination: newDestination});
  }
}
