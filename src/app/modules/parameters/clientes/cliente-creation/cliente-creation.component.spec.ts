import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreationComponent } from './cliente-creation.component';

describe('ClienteCreationComponent', () => {
  let component: ClienteCreationComponent;
  let fixture: ComponentFixture<ClienteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
