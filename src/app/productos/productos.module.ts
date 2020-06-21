import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProductosComponent,
    CreateProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [CreateProductoComponent]
})
export class ProductosModule { }
