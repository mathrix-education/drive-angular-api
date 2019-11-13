import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FolderResponse} from '../../responses/folder-response';
import {API_CONFIG} from '../../api-config';
import {FileInterface} from '../../models/file.interface';

@Injectable()
export class FilesHttpService {

  private readonly base = `${this.api}/files`;

  constructor(private http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {
  }

  move(file: string, newDestination: string): Observable<FileInterface> {
    return this.http.patch<FileInterface>(`${this.base}/${file}`, {destination: newDestination});
  }

  list(directory: string = ''): Observable<FolderResponse> {
    return this.http.get<FolderResponse>(`${this.base}/list/${directory}`);
  }


  /**
   * Add a file on cdn
   * @return url on cdn
   */
  add(file: File, destination: string, fileName: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.api}/files/${destination}/${fileName}`, formData)
      .pipe(map(req => req.data.url));
  }
}
