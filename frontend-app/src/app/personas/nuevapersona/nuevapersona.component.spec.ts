import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevapersonaComponent } from './nuevapersona.component';

describe('NuevapersonaComponent', () => {
  let component: NuevapersonaComponent;
  let fixture: ComponentFixture<NuevapersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevapersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevapersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
