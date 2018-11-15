import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppSettings } from 'src/app/app.settings';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

  onSubmit() {
    this.activeModal.close();
    localStorage.setItem(AppSettings.GROUP_SIZE_LS_KEY, this.groupSizeForm.value.groupSize);
  }
}
