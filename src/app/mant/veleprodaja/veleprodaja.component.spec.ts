import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeleprodajaComponent } from './veleprodaja.component';

describe('VeleprodajaComponent', () => {
  let component: VeleprodajaComponent;
  let fixture: ComponentFixture<VeleprodajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeleprodajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeleprodajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
