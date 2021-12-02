import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblePhotosComponent } from './inmueble-photos.component';

describe('InmueblePhotosComponent', () => {
  let component: InmueblePhotosComponent;
  let fixture: ComponentFixture<InmueblePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmueblePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmueblePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
