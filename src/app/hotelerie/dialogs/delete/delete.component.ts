import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogajouterComponent} from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.sass'
})
export class DeleteComponent {

 buildingdelet: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.buildingdelet = true;
  }
 building: any;

  ngOnInit(): void {
    this.building = this.data.building;
  }


}
