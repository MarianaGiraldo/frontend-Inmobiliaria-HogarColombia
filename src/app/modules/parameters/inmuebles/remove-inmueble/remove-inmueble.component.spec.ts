import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveInmuebleComponent } from './remove-inmueble.component';

describe('RemoveInmuebleComponent', () => {
  let component: RemoveInmuebleComponent;
  let fixture: ComponentFixture<RemoveInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
