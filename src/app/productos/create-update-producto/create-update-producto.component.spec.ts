import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateProductoComponent } from './create-update-producto.component';

describe('CreateProductoComponent', () => {
  let component: CreateUpdateProductoComponent;
  let fixture: ComponentFixture<CreateUpdateProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
