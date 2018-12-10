import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-group-size-modal',
  templateUrl: './group-size-modal.component.html',
  styleUrls: ['./group-size-modal.component.css']
})
export class GroupSizeModalComponent implements OnInit {

  private groupSize: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
    private dialogRef: MatDialogRef<GroupSizeModalComponent>
  ) { }

  ngOnInit() {
  }

  onSave() {
    AppSettings.setGroupSizeInLocalStorage(this.groupSize);
    this.dialogRef.close(this.groupSize);
  }
}
