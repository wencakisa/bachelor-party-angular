import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-group-size-modal',
  templateUrl: './group-size-modal.component.html',
  styleUrls: ['./group-size-modal.component.css']
})
export class GroupSizeModalComponent implements OnInit {

  static modalOptions: NgbModalOptions = {
    backdrop: 'static',
    size: 'sm',
    keyboard: false,
    windowClass: 'modal-mini modal-primary text-center'
  };

  groupSizeForm = new FormGroup({
    groupSize: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(50)
    ])
  });

  constructor(
    private activeModal: NgbActiveModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.activeModal.close();
    AppSettings.setGroupSizeInLocalStorage(this.groupSizeForm.value.groupSize);
    this.router.navigate(['/cart']);
  }
}
