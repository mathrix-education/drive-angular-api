import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FolderResponse} from '../../responses/folder-response';
import {API_CONFIG} from '../../api-config';
import {FileInterface} from '../../models/file.interface';
import {Directory} from '../../models/directory';

@Injectable()
export class FilesHttpService {

  private readonly base = `${this.api}/files`;

  constructor(private http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {
  }

  /**
   * move a file on cdn
   * @param file: current URL of the file you want to move
   * @param newDestination: new destination for the file you want to move
   */
  move(file: string, newDestination: string): Observable<FileInterface> {
    return this.http.patch<FileInterface>(`${this.base}/${file}`, {destination: newDestination});
  }

  /**
   * list files and directories in specified directory
   * @param directory: where you want to look at, starting from the root of cdn
   * i.e: https://cdn.web.site/folder/ -> list => 'folder'
   */
  list(directory: string = ''): Observable<FolderResponse> {
    return this.http.get<FolderResponse>(`${this.base}/list/${directory}`);
  }

  /**
   * get object metadata
   * @param item: item you want to get the metadata of, starting from the root of CDN
   * i.e: https://cdn.web.site/folder/flower.jpg -> item => 'folder/flower.jpg'
   */
  metadata(item: string = ''): Observable<Directory | FileInterface> {
    return this.http.get<Directory | FileInterface>(`${this.base}/${item}`);
  }

  /**
   * delete an item on CDN
   * @param file: url of the file you want to delete
   */
  delete(file: string = '') {
    return this.http.delete(`${this.base}/${file}`);
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
