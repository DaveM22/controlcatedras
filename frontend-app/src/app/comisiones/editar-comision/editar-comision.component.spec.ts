import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComisionComponent } from './editar-comision.component';

describe('EditarComisionComponent', () => {
  let component: EditarComisionComponent;
  let fixture: ComponentFixture<EditarComisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
