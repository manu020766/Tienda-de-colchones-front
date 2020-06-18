import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColchonesComponent } from './colchones.component';

describe('ColchonesComponent', () => {
  let component: ColchonesComponent;
  let fixture: ComponentFixture<ColchonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColchonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColchonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
