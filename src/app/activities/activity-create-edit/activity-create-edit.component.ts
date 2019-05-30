import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ActivityService } from '../shared/activity.service';
import { Price } from '../shared/price.model';
import { Activity } from '../shared/activity.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-activity-create-edit',
  templateUrl: './activity-create-edit.component.html',
  styleUrls: ['./activity-create-edit.component.css']
})
export class ActivityCreateEditComponent implements OnInit {

  private pricesMarkedForDestroying: Price[];
  private pricesAttributesControl: FormArray;

  public activityFormLabel: string = "Create Activity";
  public isCreate: boolean = true;
  public activityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private toastr: ToastrService) {
      this.pricesMarkedForDestroying = [];
    }

  ngOnInit() {
    this.activityForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      subtitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      details: ['', Validators.required],
      time_type: ['day', Validators.required],
      duration: ['', [Validators.required, Validators.min(0)]],
      transfer_included: [false],
      guide_included: [false],
      image_url: [''],
      prices_attributes: this.formBuilder.array([])
    });

    this.pricesAttributesControl = <FormArray> this.activityForm.controls['prices_attributes'];

    if (this.isUpdateMode()) {
      this.isCreate = false;
      this.activityFormLabel = "Edit Activity";
      this.activityService.getActivity(this.getActivityIdFromUrl())
        .subscribe( activity => {
          this.activityForm.patchValue(activity);
          this.addAndFillNeededPriceFields(activity);
      });
    }
  }

  isUpdateMode(): boolean {
    return this.getActivityIdFromUrl() > 0;
  }

  getActivityIdFromUrl() {
    return +this.route.snapshot.paramMap.get('id');
  }

  addAndFillNeededPriceFields(activity: Activity): void {
    for (let i = 0; i < activity.prices.length; i++) {
      this.addPriceInput();
    }
    this.activityForm.get("prices_attributes").patchValue(activity.prices);
  }

  addPriceInput() {
    this.pricesAttributesControl.push(this.createPriceInput());
  }

  createPriceInput() {
    return this.formBuilder.group({
      id: [''],
      amount: ['', [Validators.required, Validators.min(0)]],
      options: ['']
    });
  }

  removePriceInput(i: number) {
      if (this.isUpdateMode()) {
        let pricesAttributesControlGroup = <FormGroup> this.pricesAttributesControl.at(i);
        pricesAttributesControlGroup.addControl('_destroy', new FormControl(true));
        this.pricesMarkedForDestroying.push(<Price> pricesAttributesControlGroup.value);
      }

      this.pricesAttributesControl.removeAt(i);
  }

  patchImageUrlToForm() {
    var imageUrl = (<HTMLInputElement>document.getElementById("image_url")).value;

    this.activityForm.get("image_url").patchValue(imageUrl);
  }

  onSubmit() {
    this.patchImageUrlToForm();

    this.activityService.createActivity(this.activityForm.value)
      .subscribe(
        res => {
          this.toastr.success('Activity created successfully!')
          this.router.navigate(['/activities'])
        },
        err => {
          this.toastr.error(err.error.errors[0])
        }
      );
  }

  onUpdate() {
    this.patchImageUrlToForm();
    
    this.addPricesMarkedForDestroying();

    this.activityService.updateActivity(this.activityForm.value)
      .subscribe(
        res => {
          this.toastr.success('Activity updated successfully!')
          this.router.navigate([`/activities/${res['id']}`]);
        },
        err => {
          this.toastr.error(err.error.errors[0])
        }
      );
  }

  addPricesMarkedForDestroying(): void {
    this.activityForm.value.prices_attributes = this.activityForm.value.prices_attributes.concat(this.pricesMarkedForDestroying);
  }
}
