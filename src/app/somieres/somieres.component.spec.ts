import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomieresComponent } from './somieres.component';

describe('SomieresComponent', () => {
  let component: SomieresComponent;
  let fixture: ComponentFixture<SomieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
