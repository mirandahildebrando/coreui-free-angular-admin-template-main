import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private API = 'https://angry-dacia-hildebrando-d92c67ab.koyeb.app/sales';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API, {
      withCredentials: true  // sessão identifica a empresa, sem header manual
    });
  }

  salvar(data: any): Observable<any> {
    return this.http.post(this.API, data, {
      withCredentials: true
    });
  }
}
