import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Producto } from 'src/app/Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoRepositorioService {

  baseApiUrl = "http://localhost:3000"

  constructor( public http: HttpClient) { }

  getDestacados():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseApiUrl}/destacados`)
  }

  getProductoByCategoriaId(categoria:string, id:string):Observable<Producto> {
    return this.http.get<Producto>(`${this.baseApiUrl}/${categoria}/${id}`)
  }

  getColchones():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseApiUrl}/colchones`)
  }

  delColchon(id: string) {
    return this.http.delete(`${this.baseApiUrl}/colchones/${id}`)
  }

  getSomieres():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseApiUrl}/somieres`)
  }

  delSomier(id: string) {
    return this.http.delete(`${this.baseApiUrl}/somieres/${id}`)
  }

}
