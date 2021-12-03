import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveClienteComponent } from './remove-cliente.component';

describe('RemoveClienteComponent', () => {
  let component: RemoveClienteComponent;
  let fixture: ComponentFixture<RemoveClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
