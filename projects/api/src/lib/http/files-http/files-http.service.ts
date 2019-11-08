import {environment} from '../../environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FolderResponse} from '../../responses/folder-response';

@Injectable({
  providedIn: 'root'
})
export class FilesHttpService {

  private readonly base = `${environment.api}/files`;

  constructor(private http: HttpClient) {
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
    return this.http.post<any>(`${environment.api}/files/${destination}/${fileName}`, formData)
      .pipe(map(req => req.data.url));
  }
}
