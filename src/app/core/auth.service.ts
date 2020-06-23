import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public http:HttpClient) { }

  isLoggedIn() {
    let usuario = localStorage.getItem('token')
    return !!usuario
  }

  login(email:string, password:string) {
    let body = { email, password }

      return this.http.post('http://localhost:3000/login', body).toPromise() 
  }

  isAdministrador() {
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    return usuario.rol === 'administrador'
  }
  
}
