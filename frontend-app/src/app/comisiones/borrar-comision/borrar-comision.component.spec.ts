import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarComisionComponent } from './borrar-comision.component';

describe('BorrarComisionComponent', () => {
  let component: BorrarComisionComponent;
  let fixture: ComponentFixture<BorrarComisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarComisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
