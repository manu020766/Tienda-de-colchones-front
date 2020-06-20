import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoRepositorioService {

  baseApiUrl = "http://localhost:3000/productos"

  constructor( public http: HttpClient) { }

  getDestacados():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseApiUrl}/?destacado=true`)
  }

  getProductoById(id:string):Observable<Producto> {
    return this.http.get<Producto>(`${this.baseApiUrl}/id/${id}`)
  }

  getProductos(categoria: string):Observable<Producto[]>  {
    return this.http.get<Producto[]>(`${this.baseApiUrl}/${categoria}`)
  }

  delProducto(id: string) {
    return this.http.delete(`${this.baseApiUrl}/${id}`)
  }

}
