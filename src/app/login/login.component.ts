import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { OkDialogComponent } from '../shared/ok-dialog/ok-dialog.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('email') emailRel:ElementRef
  @ViewChild('password') passwordRel:ElementRef

  constructor( public authService: AuthService,
               public router:Router,
               private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    //Expression has changed after it was checked
    setTimeout(() => this.emailRel.nativeElement.focus())
  }

  ngOnInit() {
  }

  async login() {
    let email = this.emailRel.nativeElement.value
    let password = this.passwordRel.nativeElement.value

    if(!(email && password)) {
      this.mostrarMensaje('Credenciales incorrectas')
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
        this.mostrarMensaje(usuarioRes.mensaje)
      }
    } catch (error) {
      this.mostrarMensaje('Credenciales incorrectas')
    }
  }

  mostrarMensaje(mensaje:string) {
    const okDialog = this.dialog.open(OkDialogComponent, {
      data: {
        title: 'ERROR',
        message: mensaje
      }
    })
    // okDialog.afterClosed().subscribe(result => {
    //   console.log(result)
    // })
  }

}
