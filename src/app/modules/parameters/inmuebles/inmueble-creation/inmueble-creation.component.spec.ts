import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleCreationComponent } from './inmueble-creation.component';

describe('InmuebleCreationComponent', () => {
  let component: InmuebleCreationComponent;
  let fixture: ComponentFixture<InmuebleCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebleCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
