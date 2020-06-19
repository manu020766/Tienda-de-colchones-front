import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductoRepositorioService } from '../core/productoRepositorio.service'
import { Producto } from '../Models/producto'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router'

@Component({
  selector: 'app-colchones',
  templateUrl: './colchones.component.html',
  styleUrls: ['./colchones.component.less']
})
export class ColchonesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns = ['titulo', 'precio', 'details', 'update', 'delete']
  public dataSource = new MatTableDataSource<Producto>();

  constructor(public repoService:ProductoRepositorioService, private router:Router) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getColchones()
  }

  getColchones() {
    this.repoService.getColchones().subscribe(res => this.dataSource.data = res as Producto[])
  }

  public redirectToDetails = (id: string) => {
    this.router.navigateByUrl(`/colchones/${id}`)
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    this.repoService.delColchon(id).subscribe(res => this.getColchones())
  }

}
