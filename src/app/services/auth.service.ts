import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API =
    'https://angry-dacia-hildebrando-d92c67ab.koyeb.app';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      `${this.API}/auth/login`,
      data,
      { responseType: 'text' as 'json' }
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(
      `${this.API}/auth/register`,
      data,
      { responseType: 'text' as 'json' }
    );
  }
}
