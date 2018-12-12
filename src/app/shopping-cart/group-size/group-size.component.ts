import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppSettings } from 'src/app/app.settings';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-group-size',
  templateUrl: './group-size.component.html',
  styleUrls: ['./group-size.component.css']
})
export class GroupSizeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<GroupSizeComponent>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      groupSize: this.formBuilder.control('', [
        Validators.required,
        Validators.min(1),
        Validators.max(50)
      ])
    });
  }

  submit(form) {
    AppSettings.setGroupSizeInLocalStorage(form.value.groupSize);
    this.dialogRef.close();
  }

}
