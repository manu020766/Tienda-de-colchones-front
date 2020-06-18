import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VerProductoComponent } from './componentes/ver-producto/ver-producto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent,
    children: [
      { path: ':categoria/:id', component: VerProductoComponent},
      { path: 'colchones', loadChildren: () => import('./colchones/colchones.module').then(m => m.ColchonesModule) },
      { path: 'somieres', loadChildren: () => import('./somieres/somieres.module').then(m => m.SomieresModule) },
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
