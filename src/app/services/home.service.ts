import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.server}/list`);
  }

  getInfoById(id): Observable<any> {
    return this.http.get(`${environment.server}/info/${id}`);
  }
}
