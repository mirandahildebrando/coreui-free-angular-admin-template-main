import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'https://angry-dacia-hildebrando-d92c67ab.koyeb.app';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      `${this.API}/auth/login`,
      data,
      {
        responseType: 'text' as 'json',
        withCredentials: true  // envia e recebe o cookie de sessão
      }
    );
  }

  adminLogin(data: any): Observable<any> {
    return this.http.post(
      `${this.API}/auth/admin/login`,
      data,
      {
        responseType: 'text' as 'json',
        withCredentials: true
      }
    );
  }

  logout(): Observable<any> {
    return this.http.post(
      `${this.API}/auth/logout`,
      {},
      {
        responseType: 'text' as 'json',
        withCredentials: true
      }
    );
  }
}