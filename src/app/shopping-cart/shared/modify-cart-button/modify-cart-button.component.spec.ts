import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCartButtonComponent } from './modify-cart-button.component';

describe('ModiyCartButtonComponent', () => {
  let component: ModifyCartButtonComponent;
  let fixture: ComponentFixture<ModifyCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
