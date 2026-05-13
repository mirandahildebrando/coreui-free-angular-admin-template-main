import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API =
    'https://angry-dacia-hildebrando-d92c67ab.koyeb.app/products';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  salvar(product: any): Observable<any> {
    return this.http.post(this.API, product);
  }

  atualizar(id: number, product: any): Observable<any> {
    return this.http.put(`${this.API}/${id}`, product);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
