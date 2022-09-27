import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSidenavComponent } from './client-sidenav.component';

describe('ClientSidenavComponent', () => {
  let component: ClientSidenavComponent;
  let fixture: ComponentFixture<ClientSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
