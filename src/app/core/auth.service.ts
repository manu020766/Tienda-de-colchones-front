import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public http:HttpClient) { }

  isLoggedIn() {
    let usuario = localStorage.getItem('usuario')
    return !!usuario
  }

  login(email:string, password:string) {
    let body = { email, password }

      return this.http.post('http://localhost:3000/login', body).toPromise() 
  }

  isAdministrador() {
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log(usuario.rol)
    return usuario.rol === 'administrador'
  }
  
}
