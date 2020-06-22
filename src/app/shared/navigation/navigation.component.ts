import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core'
import { Observable, Subscription, fromEvent } from 'rxjs'
import { Router, NavigationEnd } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'
import { NavigationService } from './navigation.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav

  nombreUsuario: string
  showNombreUsuario = true

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  open:boolean
  style:string

  showDestacados:boolean

  constructor(private router:Router,
              public navigatioService: NavigationService) {

    let usuario = JSON.parse(localStorage.getItem('usuario'))
    this.nombreUsuario = usuario.nombre

    // this.navigatioService.setSidenav(this.sidenav)
    this.getScreenSize()

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => this.getScreenSize())

    this.router.events.subscribe(ruta => {
      if ( ruta instanceof NavigationEnd) {
        this.showDestacados = (ruta.url === "/") ? true:false
      }
    })
   }

  getScreenSize(event?) {
        const scrWidth = window.innerWidth

        if (scrWidth > 1024) {
          this.open = true
          this.style = 'side'
        } else {
          this.open = false
          this.style = 'push'
        } 

        if (scrWidth < 600) { this.showNombreUsuario = false }
          else { this.showNombreUsuario = true }
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  ngOnInit(): void { }
  
  ngAfterViewInit () {
    this.navigatioService.setSidenav(this.sidenav)
   }

  toggleSideNav() {
    // this.sidenav.toggle()
    this.navigatioService.toggle()
  }

  navega(ruta:string) {
    this.toggleSideNav()
    this.router.navigate([ruta])
  }

  logOut() {
    localStorage.removeItem('usuario')
    localStorage.removeItem('token')
    
    this.router.navigateByUrl('/login')
  }

}
