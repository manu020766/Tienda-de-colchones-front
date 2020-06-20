import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule } from '@angular/material/paginator'
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

const componentes = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatDividerModule,
  MatDialogModule
]

@NgModule({
  imports: componentes,
  exports: componentes,
  declarations: []
})
export class MaterialModule { }
