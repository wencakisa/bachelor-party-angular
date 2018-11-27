import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css']
})
export class ActivityCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activityService: ActivityService) { }

  createActivityForm: FormGroup;

  ngOnInit() {
    this.createActivityForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      subtitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      details: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(0)]],
      transfer_included: [false],
      guide_included: [false]
    });
  }

  onSubmit() {
    this.activityService.createActivity(this.createActivityForm.value)
      .subscribe(data => {
        this.router.navigate(['activities']);
      },
      error => {
        alert(error);
      });
  }
}
