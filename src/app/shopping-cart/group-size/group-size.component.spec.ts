import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSizeComponent } from './group-size.component';

describe('GroupSizeComponent', () => {
  let component: GroupSizeComponent;
  let fixture: ComponentFixture<GroupSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
