import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCreateEditComponent } from './activity-create-edit.component';

describe('ActivityCreateEditComponent', () => {
  let component: ActivityCreateEditComponent;
  let fixture: ComponentFixture<ActivityCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
