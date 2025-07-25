import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {DialogajouterComponent} from "../dialogajouter/dialogajouter.component";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dialogsupdate',

  templateUrl: './dialogsupdate.component.html',
  styleUrl: './dialogsupdate.component.sass'
})
export class DialogsupdateComponent {
  commandeGeneree: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogajouterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.commandeGeneree = true;
  }
}
