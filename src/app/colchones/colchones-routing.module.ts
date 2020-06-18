import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColchonesComponent } from './colchones.component';

const routes: Routes = [
  { path: '', component: ColchonesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColchonesRoutingModule { }
