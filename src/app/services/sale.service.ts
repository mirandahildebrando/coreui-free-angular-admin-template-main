import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private api = 'https://angry-dacia-hildebrando-d92c67ab.koyeb.app/sales';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.api);
  }

  salvar(data: any) {
    return this.http.post(this.api, data);
  }
}
