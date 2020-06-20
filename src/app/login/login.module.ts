import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/material.module';
import { OkDialogComponent } from '../shared/ok-dialog/ok-dialog.component';

@NgModule({
  declarations: [LoginComponent, OkDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LoginModule { }
