import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSizeModalComponent } from './group-size-modal.component';

describe('GroupSizeModalComponent', () => {
  let component: GroupSizeModalComponent;
  let fixture: ComponentFixture<GroupSizeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSizeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSizeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
