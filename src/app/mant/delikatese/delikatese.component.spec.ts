import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelikateseComponent } from './delikatese.component';

describe('DelikateseComponent', () => {
  let component: DelikateseComponent;
  let fixture: ComponentFixture<DelikateseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelikateseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelikateseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
