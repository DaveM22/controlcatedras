import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCursosAlumnoComponent } from './lista-cursos-alumno.component';

describe('ListaCursosAlumnoComponent', () => {
  let component: ListaCursosAlumnoComponent;
  let fixture: ComponentFixture<ListaCursosAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCursosAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCursosAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
