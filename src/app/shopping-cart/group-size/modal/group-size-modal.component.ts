import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-group-size-modal',
  templateUrl: './group-size-modal.component.html',
  styleUrls: ['./group-size-modal.component.css']
})
export class GroupSizeModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}
