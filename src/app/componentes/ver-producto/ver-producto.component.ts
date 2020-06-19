import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Producto } from 'src/app/Models/producto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { ProductoRepositorioService } from 'src/app/core/productoRepositorio.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.less']
})
export class VerProductoComponent implements OnInit, OnDestroy {

  sub:Subscription
  sub2:Subscription
  Producto$:Observable<Producto>

  constructor(private repoService: ProductoRepositorioService,
              private route: ActivatedRoute,
              private location: Location) { 

    this.sub = this.route.params.subscribe( params => {
      this.Producto$ = this.repoService.getProductoByCategoriaId(params.categoria, params.id)
    })
  }

  borrarProducto(id:string) {
    this.sub2 = this.repoService.delColchon(id).subscribe(res => this.location.back())
  }

  volver() {
    this.location.back()
  }

  ngOnInit(): void {}
  
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe()
    if (this.sub2) this.sub2.unsubscribe()
  }
}