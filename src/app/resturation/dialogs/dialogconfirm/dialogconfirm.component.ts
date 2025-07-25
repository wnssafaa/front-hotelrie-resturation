import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogajouterComponent} from "../dialogajouter/dialogajouter.component";

@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrl: './dialogconfirm.component.sass'
})
export class DialogconfirmComponent {
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
  commande: any;

  ngOnInit(): void {
    this.commande = this.data.commande;
  }



}
