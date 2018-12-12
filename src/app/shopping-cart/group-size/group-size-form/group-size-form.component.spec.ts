import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSizeFormComponent } from './group-size-form.component';

describe('GroupSizeFormComponent', () => {
  let component: GroupSizeFormComponent;
  let fixture: ComponentFixture<GroupSizeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSizeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
