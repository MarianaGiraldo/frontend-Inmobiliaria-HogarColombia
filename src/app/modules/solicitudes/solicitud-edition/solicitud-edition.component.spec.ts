import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEditionComponent } from './solicitud-edition.component';

describe('SolicitudEditionComponent', () => {
  let component: SolicitudEditionComponent;
  let fixture: ComponentFixture<SolicitudEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
