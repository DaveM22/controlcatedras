import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaComisionComponent } from './nueva-comision.component';

describe('NuevaComisionComponent', () => {
  let component: NuevaComisionComponent;
  let fixture: ComponentFixture<NuevaComisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaComisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
