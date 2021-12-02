import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleEditionComponent } from './inmueble-edition.component';

describe('InmuebleEditionComponent', () => {
  let component: InmuebleEditionComponent;
  let fixture: ComponentFixture<InmuebleEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebleEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
