import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapersonasComponent } from './listapersonas.component';

describe('ListapersonasComponent', () => {
  let component: ListapersonasComponent;
  let fixture: ComponentFixture<ListapersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
