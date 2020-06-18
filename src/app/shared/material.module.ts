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
  MatPaginatorModule
]

@NgModule({
  imports: componentes,
  exports: componentes
})
export class MaterialModule { }
