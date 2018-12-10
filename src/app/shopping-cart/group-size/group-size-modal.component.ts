import { Component, OnInit, Inject } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-group-size-modal',
  templateUrl: './group-size-modal.component.html',
  styleUrls: ['./group-size-modal.component.css']
})
export class GroupSizeModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    // AppSettings.setGroupSizeInLocalStorage(this.groupSize);
    // this.dialogRef.close(this.groupSize);
  }
}
