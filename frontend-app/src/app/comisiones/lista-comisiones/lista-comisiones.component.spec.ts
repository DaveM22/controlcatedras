import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComisionesComponent } from './lista-comisiones.component';

describe('ListaComisionesComponent', () => {
  let component: ListaComisionesComponent;
  let fixture: ComponentFixture<ListaComisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
