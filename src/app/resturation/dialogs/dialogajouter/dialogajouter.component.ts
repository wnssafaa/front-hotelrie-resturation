import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogajouter',
  templateUrl: './dialogajouter.component.html',
  styleUrls: ['./dialogajouter.component.sass']
})
export class DialogajouterComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogajouterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
