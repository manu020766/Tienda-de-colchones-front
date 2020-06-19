import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/Models/producto';
import { ProductoRepositorioService } from 'src/app/core/productoRepositorio.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.less']
})
export class DestacadosComponent implements OnInit {

  destacados$:Observable<Producto[]>
  constructor(public repoService:ProductoRepositorioService) { }

  ngOnInit(): void {
    this.destacados$ = this.repoService.getDestacados()
  }
}
