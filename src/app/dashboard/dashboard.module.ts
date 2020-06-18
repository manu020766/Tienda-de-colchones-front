import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MaterialModule } from '../shared/material.module'

import { DashboardComponent } from './dashboard.component'
import { NavigationComponent } from '../shared/navigation/navigation.component'

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

