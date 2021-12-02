import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCreationComponent } from './solicitud-creation.component';

describe('SolicitudCreationComponent', () => {
  let component: SolicitudCreationComponent;
  let fixture: ComponentFixture<SolicitudCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
