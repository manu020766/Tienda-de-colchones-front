import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core'
import { Observable, Subscription, fromEvent } from 'rxjs'
import { Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'
import { NavigationService } from './navigation.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  open:boolean
  style:string

  constructor(private router:Router, public navigatioService: NavigationService) {
    // this.navigatioService.setSidenav(this.sidenav)
    this.getScreenSize()

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => this.getScreenSize())
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

}
