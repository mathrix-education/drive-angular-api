import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FolderResponse} from '../../responses/folder-response';
import {API_CONFIG} from '../../api-config';

@Injectable()
export class FilesHttpService {

  private readonly base = `${this.api}/files`;

  constructor(private http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {
  }

  explore(directory) {
    return this.http.get(`${this.base}/explore[/${directory}]`);
  }


  tree(directory: string = ''): Observable<FolderResponse> {
    return this.http.get<FolderResponse>(`${this.base}/explore/${directory}`);
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
