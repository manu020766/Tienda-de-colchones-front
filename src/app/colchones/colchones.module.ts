import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColchonesRoutingModule } from './colchones-routing.module';
import { ColchonesComponent } from './colchones.component';


@NgModule({
  declarations: [ColchonesComponent],
  imports: [
    CommonModule,
    ColchonesRoutingModule
  ]
})
export class ColchonesModule { }
