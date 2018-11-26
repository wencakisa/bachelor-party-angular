import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../shared/activity.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

  activity: Activity;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService) { }

  editActivityForm: FormGroup;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.editActivityForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      subtitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      details: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(0)]],
      transfer_included: [],
      guide_included: []
    });

    this.activityService.getActivity(id)
      .subscribe( activity => {
        this.editActivityForm.patchValue(activity);
    });
  }
  
  onSubmit() {
    this.activityService.updateActivity(this.editActivityForm.value)
      .subscribe(activity => {
        this.router.navigate([`/activities/${activity['id']}`]);
      },
      error => {  
        alert(error);  
      });
  }

}
