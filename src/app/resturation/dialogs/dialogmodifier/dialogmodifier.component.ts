import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialogmodifier',

  templateUrl: './dialogmodifier.component.html',
  styleUrl: './dialogmodifier.component.sass'
})
export class DialogmodifierComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogmodifierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
