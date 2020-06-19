import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Producto } from '../Models/producto'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router'
import { ProductoRepositorioService } from '../core/productoRepositorio.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-somieres',
  templateUrl: './somieres.component.html',
  styleUrls: ['./somieres.component.less']
})
export class SomieresComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  mostrarEditDel = false

  public displayedColumns = ['titulo', 'precio', 'details', 'update', 'delete']
  public dataSource = new MatTableDataSource<Producto>();

  constructor(public repoService:ProductoRepositorioService,
              private router:Router,
              private authService: AuthService) { }

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
 
  public redirectToDelete = (id: string) => {
    let respuesta = confirm('Desea borrar el producto')
    if (respuesta) this.repoService.delSomier(id).subscribe(res => this.getSomieres())
  }

}
