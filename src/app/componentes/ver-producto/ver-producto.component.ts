import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Producto } from 'src/app/Models/producto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { ProductoRepositorioService } from 'src/app/core/productoRepositorio.service';
import { AuthService } from 'src/app/core/auth.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateUpdateProductoComponent } from 'src/app/productos/create-update-producto/create-update-producto.component';


@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.less']
})
export class VerProductoComponent implements OnInit, OnDestroy {
  mostrarEditDel = false

  sub:Subscription
  sub2:Subscription
  Producto$:Observable<Producto>

  constructor(private repoService: ProductoRepositorioService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService,
              private dialog: MatDialog) { 

    this.sub = this.route.params.subscribe( params => {
      this.Producto$ = this.repoService.getProductoById(params.id)
    })
  }

  borrarProducto(producto:Producto) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'CATEGORIA ' + producto.categoria,
        message: 'Seguro que quieres borrar: ' + producto.titulo
      }
    })
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.sub2 = this.repoService.delProducto(producto._id).subscribe(res => this.location.back())
      }
    })
  }

  editarProducto(producto) {
    const DialogConfig = new MatDialogConfig()
    DialogConfig.autoFocus = true
    DialogConfig.disableClose = true
  

    DialogConfig.data = {
      destacado: producto.destacado,
      _id: producto._id,
      titulo: producto.titulo,
      imagen: producto.imagen,
      precio: producto.precio,
      categoria: producto.categoria[0].toUpperCase() + producto.categoria.slice(1),
      descripcion: producto.descripcion
    }

    const dialogoRef = this.dialog.open(CreateUpdateProductoComponent, DialogConfig)

    dialogoRef.afterClosed().subscribe(data => {
      
      if (data)
        this.repoService.updateProducto(data.titulo, data.descripcion, data.categoria, data.precio, data.destacado, data.file, data._id)
          .subscribe(res => this.Producto$ = this.repoService.getProductoById(data._id))
    })
  }

  volver() {
    this.location.back()
  }

  ngOnInit(): void { 
    this.mostrarEditDel = this.authService.isAdministrador()
   }
  
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe()
    if (this.sub2) this.sub2.unsubscribe()
  }
}
