import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-group-size-form',
  templateUrl: './group-size-form.component.html',
  styleUrls: ['./group-size-form.component.css']
})
export class GroupSizeFormComponent {

  @Input() activeModal: NgbActiveModal;

  groupSizeForm = new FormGroup({
    groupSize: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(50)
    ])
  });

  constructor() { }

  onSubmit(): void {
    this.activeModal.close();
    AppSettings.setGroupSizeInLocalStorage(this.groupSizeForm.value.groupSize);
  }
}
