import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColchonesRoutingModule } from './colchones-routing.module';
import { ColchonesComponent } from './colchones.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ColchonesComponent],
  imports: [
    CommonModule,
    ColchonesRoutingModule,
    MaterialModule
  ]
})
export class ColchonesModule { }
