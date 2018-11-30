import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-activity-create-edit',
  templateUrl: './activity-create-edit.component.html',
  styleUrls: ['./activity-create-edit.component.css']
})
export class ActivityCreateEditComponent implements OnInit {

  public activityFormLabel: string = "Create Activity";
  public isCreate: boolean = true;
  public activityForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService) { }

  ngOnInit() {
    this.activityForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      subtitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      details: ['', Validators.required],
      by: ['day', Validators.required],
      duration: ['', [Validators.required, Validators.min(0)]],
      transfer_included: [false],
      guide_included: [false]
    });

    const activityId = +this.route.snapshot.paramMap.get('id');
    if (+activityId > 0) {
      this.isCreate = false;
      this.activityFormLabel = "Edit Activity";
      this.activityService.getActivity(activityId)
        .subscribe( activity => {
          this.activityForm.patchValue(activity);
      });
    }
  }

  onSubmit() {
    this.activityService.createActivity(this.activityForm.value)
      .subscribe(data => {
        this.router.navigate(['activities']);
      },
      error => {
        alert(error);  
      });
  }

  onUpdate() {
    this.activityService.updateActivity(this.activityForm.value)
      .subscribe(activity => {
        this.router.navigate([`/activities/${activity['id']}`]);
      },
      error => {  
        alert(error);  
      });
  }

}
