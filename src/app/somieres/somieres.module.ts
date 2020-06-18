import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomieresRoutingModule } from './somieres-routing.module';
import { SomieresComponent } from './somieres.component';


@NgModule({
  declarations: [SomieresComponent],
  imports: [
    CommonModule,
    SomieresRoutingModule
  ]
})
export class SomieresModule { }
