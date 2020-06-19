import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('email') emailRel:ElementRef
  @ViewChild('password') passwordRel:ElementRef

  constructor( public authService: AuthService,
               public router:Router) { }

  ngAfterViewInit(): void {
    this.emailRel.nativeElement.focus()
  }

  ngOnInit() {
  }

  async login(email:string, password:string) {
    if(!(email && password)) {
      alert('Credenciales incorrectas')
      return
    }

    try {
      let usuarioRes: any = await this.authService.login(email, password)
  
      if (usuarioRes.ok) {
        localStorage.setItem('usuario', JSON.stringify(usuarioRes.usuario))
        this.emailRel.nativeElement.value = ''
        this.passwordRel.nativeElement.value = ''
        this.router.navigateByUrl('/')
      } else {
        alert(usuarioRes.mensaje)
      }
    } catch (error) {
      alert('Credenciales incorrectas')
    }
  }

}
