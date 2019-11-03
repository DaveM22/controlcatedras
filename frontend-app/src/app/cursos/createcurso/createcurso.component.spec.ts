import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecursoComponent } from './createcurso.component';

describe('CreatecursoComponent', () => {
  let component: CreatecursoComponent;
  let fixture: ComponentFixture<CreatecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
