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

  createProducto(titulo:string, descripcion:string, categoria:string, precio:number, destacado:boolean, imagen:File){
    let fd = new FormData()
    fd.append('titulo', titulo)
    fd.append('descripcion', descripcion)
    fd.append('categoria', categoria)
    fd.append('precio', precio.toString())
    fd.append('destacado', destacado.toString())
    fd.append('imagen', imagen)

    console.log(fd)

    return this.http.post(`${this.baseApiUrl}`, fd)
  }

  updateProducto(titulo:string, descripcion:string, categoria:string, precio:number, destacado:boolean, imagen:File, id:string){
    let fd = new FormData()
    fd.append('titulo', titulo)
    fd.append('descripcion', descripcion)
    fd.append('categoria', categoria)
    fd.append('precio', precio.toString())
    fd.append('destacado', destacado.toString())
    fd.append('imagen', imagen)

    return this.http.put(`${this.baseApiUrl}/${id}`, fd)
  }

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
