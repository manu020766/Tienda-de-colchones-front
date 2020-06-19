import { TestBed } from '@angular/core/testing';

import { ProductoRepositorioService } from './productoRepositorio.service';

describe('ProductoRepositorioService', () => {
  let service: ProductoRepositorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoRepositorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
