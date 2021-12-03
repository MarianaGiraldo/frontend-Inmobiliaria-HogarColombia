import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAsesorComponent } from './remove-asesor.component';

describe('RemoveAsesorComponent', () => {
  let component: RemoveAsesorComponent;
  let fixture: ComponentFixture<RemoveAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
