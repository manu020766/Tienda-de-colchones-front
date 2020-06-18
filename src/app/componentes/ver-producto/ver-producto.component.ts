import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Producto } from 'src/app/Models/producto';
import { DestacadosService } from '../destacados/destacados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.less']
})
export class VerProductoComponent implements OnInit, OnDestroy {

  sub:Subscription
  Producto$:Observable<Producto>

  constructor(private verProducto: DestacadosService,
              private route:ActivatedRoute) { 

    this.sub = this.route.params.subscribe( params => {
      this.Producto$ = this.verProducto.getProductoByCategoriaId(params.categoria, params.id)
    })
  }

  ngOnInit(): void {}
  
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
