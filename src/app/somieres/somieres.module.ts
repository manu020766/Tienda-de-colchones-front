import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomieresRoutingModule } from './somieres-routing.module';
import { SomieresComponent } from './somieres.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [SomieresComponent],
  imports: [
    CommonModule,
    SomieresRoutingModule,
    MaterialModule
  ]
})
export class SomieresModule { }
