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

  /**
   * Upload files
   * @param files
   */
  uploadMulti(files: File[]) {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(index.toString(),
        file, file.name);
    });
    console.log(files);
    console.log(formData);
    return this.http.post<{ [key: string]: string }[]>(`${this.base}/multi`, formData,
      {
        headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
      });
  }

  explore(directory) {
    return this.http.get(`${this.base}/explore[/${directory}]`);
  }


  tree(directory: string = ''): Observable<FolderResponse> {
    return this.http.get<FolderResponse>(`${this.base}/explore/${directory}`);
  }


  add(file: File, destination: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ url: string }>(`${environment.api}/files/${destination}`, formData)
      .pipe(map(req => req.url));
  }
}
