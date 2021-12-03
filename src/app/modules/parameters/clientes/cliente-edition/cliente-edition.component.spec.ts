import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditionComponent } from './cliente-edition.component';

describe('ClienteEditionComponent', () => {
  let component: ClienteEditionComponent;
  let fixture: ComponentFixture<ClienteEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
