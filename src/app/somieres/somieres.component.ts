import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Producto } from '../Models/producto'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router'
import { ProductoRepositorioService } from '../core/productoRepositorio.service';
import { AuthService } from '../core/auth.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-somieres',
  templateUrl: './somieres.component.html',
  styleUrls: ['./somieres.component.less']
})
export class SomieresComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sub:Subscription

  mostrarEditDel = false

  public displayedColumns = ['titulo', 'precio', 'details', 'delete', 'update']
  public dataSource = new MatTableDataSource<Producto>();

  constructor(public repoService:ProductoRepositorioService,
              private router:Router,
              private authService: AuthService,
              private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.mostrarEditDel = this.authService.isAdministrador()
    if (!this.mostrarEditDel) {
      this.displayedColumns = ['titulo', 'precio', 'details']
    }
    this.getSomieres()
  }

  getSomieres() {
    this.repoService.getSomieres().subscribe(res => this.dataSource.data = res as Producto[])
  }

  public redirectToDetails = (id: string) => {
    this.router.navigateByUrl(`/somieres/${id}`)
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (producto) => {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'CATEGORIA ' + producto.categoria,
        message: 'Seguro que quieres borrar: ' + producto.titulo
      }
    })
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.sub = this.repoService.delColchon(producto._id).subscribe(res => this.getSomieres())
      }
    })

  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe()
  }

}
