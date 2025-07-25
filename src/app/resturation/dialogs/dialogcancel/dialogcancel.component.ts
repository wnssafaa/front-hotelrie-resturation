import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialogcancel',
  templateUrl: './dialogcancel.component.html',
  styleUrl: './dialogcancel.component.sass'
})
export class DialogcancelComponent {
  reason = '';

  constructor(public dialogRef: MatDialogRef<DialogcancelComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
