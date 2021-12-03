import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorEditionComponent } from './asesor-edition.component';

describe('AsesorEditionComponent', () => {
  let component: AsesorEditionComponent;
  let fixture: ComponentFixture<AsesorEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
