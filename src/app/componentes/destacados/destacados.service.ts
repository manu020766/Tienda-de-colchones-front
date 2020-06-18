import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Producto } from 'src/app/Models/producto';

@Injectable({
  providedIn: 'root'
})
export class DestacadosService {

  baseApiUrl = "http://localhost:3000"

  constructor( public http: HttpClient) { }

  getDestacados():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseApiUrl}/destacados`)
  }

  getProductoByCategoriaId(categoria:string, id:string):Observable<Producto> {
    return this.http.get<Producto>(`${this.baseApiUrl}/${categoria}/${id}`)
  }
}
