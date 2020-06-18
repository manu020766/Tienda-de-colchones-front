import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomieresComponent } from './somieres.component';

const routes: Routes = [
  { path: '', component: SomieresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomieresRoutingModule { }
