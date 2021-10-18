import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab6ItemsComponent } from './lab6-items.component';

describe('Lab6ItemsComponent', () => {
  let component: Lab6ItemsComponent;
  let fixture: ComponentFixture<Lab6ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab6ItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab6ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
