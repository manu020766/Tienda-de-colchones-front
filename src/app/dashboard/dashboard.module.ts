import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { MaterialModule } from '../shared/material.module'

import { DashboardComponent } from './dashboard.component'
import { NavigationComponent } from '../shared/navigation/navigation.component'
import { DestacadosComponent } from '../componentes/destacados/destacados.component'
import { VerProductoComponent } from '../componentes/ver-producto/ver-producto.component'

@NgModule({
  declarations: [
    DashboardComponent,
    DestacadosComponent,
    NavigationComponent,
    VerProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

