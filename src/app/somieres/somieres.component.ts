import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DestacadosService } from '../componentes/destacados/destacados.service';
import { Producto } from '../Models/producto'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router'

@Component({
  selector: 'app-somieres',
  templateUrl: './somieres.component.html',
  styleUrls: ['./somieres.component.less']
})
export class SomieresComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns = ['titulo', 'precio', 'details', 'update', 'delete']
  public dataSource = new MatTableDataSource<Producto>();

  constructor(public repoService:DestacadosService, private router:Router) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
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
    this.repoService.delSomier(id).subscribe(res => this.getSomieres())
  }

}
