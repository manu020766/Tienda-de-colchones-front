import { Component, OnInit } from '@angular/core';
import { DestacadosService } from './destacados.service';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/Models/producto';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.less']
})
export class DestacadosComponent implements OnInit {

  destacados$:Observable<Producto[]>
  constructor(public destacados: DestacadosService) { }

  ngOnInit(): void {
    this.destacados$ = this.destacados.getDestacados()
  }
}
