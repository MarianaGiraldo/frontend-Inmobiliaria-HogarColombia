import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorCreationComponent } from './asesor-creation.component';

describe('AsesorCreationComponent', () => {
  let component: AsesorCreationComponent;
  let fixture: ComponentFixture<AsesorCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
