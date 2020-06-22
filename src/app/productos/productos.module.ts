import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateUpdateProductoComponent } from './create-update-producto/create-update-producto.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CreateUpdateProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [CreateUpdateProductoComponent]
})
export class ProductosModule { }
