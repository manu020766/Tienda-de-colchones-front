import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { ProductoRepositorioService } from '../core/productoRepositorio.service'
import { Producto } from '../Models/producto'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../core/auth.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Subscription } from 'rxjs';
import { CreateUpdateProductoComponent } from './create-update-producto/create-update-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.less']
})
export class ProductosComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sub:Subscription
  sub2:Subscription
  categoria:string

  mostrarEditDel = false

  public displayedColumns = ['titulo', 'precio', 'details', 'delete', 'update' ]
  public dataSource = new MatTableDataSource<Producto>();

  constructor(public repoService:ProductoRepositorioService,
              private router:Router,
              private route: ActivatedRoute,
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

    this.sub2 = this.route.params.subscribe( params => {
      this.categoria = params.categoria
      this.getProductos(this.categoria)
    })
    
  }

  addProduct() {
    const DialogConfig = new MatDialogConfig()
    DialogConfig.autoFocus = true
    DialogConfig.disableClose = true
  

    DialogConfig.data = {
      destacado: false,
      _id: '',
      titulo: '',
      imagen: '',
      precio: '',
      categoria: this.categoria[0].toUpperCase() + this.categoria.slice(1),
      descripcion: ''
    }

    const dialogoRef = this.dialog.open(CreateUpdateProductoComponent, DialogConfig)

    dialogoRef.afterClosed().subscribe(data => {
      this.repoService.createProducto(data.titulo, data.descripcion, data.categoria, data.precio, data.destacado, data.file)
        .subscribe(res => this.getProductos(this.categoria))
    })

  }

  getProductos(categoria: string) {
    this.repoService.getProductos(categoria).subscribe(res => this.dataSource.data = res as Producto[])
  }

  public redirectToDetails = (id: string) => {
    this.router.navigateByUrl(`/${this.categoria}/${id}`)
  }
 
  public redirectToUpdate = (producto) => {
    const DialogConfig = new MatDialogConfig()
    DialogConfig.autoFocus = true
    DialogConfig.disableClose = true
  

    DialogConfig.data = {
      destacado: producto.destacado,
      _id: producto._id,
      titulo: producto.titulo,
      imagen: producto.imagen,
      precio: producto.precio,
      categoria: this.categoria[0].toUpperCase() + this.categoria.slice(1),
      descripcion: producto.descripcion
    }

    const dialogoRef = this.dialog.open(CreateUpdateProductoComponent, DialogConfig)

    dialogoRef.afterClosed().subscribe(data => {
      
      if (data)
        this.repoService.updateProducto(data.titulo, data.descripcion, data.categoria, data.precio, data.destacado, data.file, data._id)
          .subscribe(res => this.getProductos(this.categoria))
    })
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
        this.sub = this.repoService.delProducto(producto._id).subscribe(res => this.getProductos(this.categoria))
      }
    })
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe()
    this.sub2 && this.sub2.unsubscribe()
  }

}
