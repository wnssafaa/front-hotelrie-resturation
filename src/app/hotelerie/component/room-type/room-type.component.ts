import { Component } from '@angular/core';
import {DialogmodifierComponent} from "../../../resturation/dialogs/dialogmodifier/dialogmodifier.component";
import {DialogajouterComponent} from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomTypeService} from "../../services/room-type.service";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrl: './room-type.component.sass'
})
export class RoomTypeComponent {
  roomTypeForm!: FormGroup;
  modificationReussi: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public roomTypeService: RoomTypeService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initRoomTypeForm();
    this.route.params.subscribe(params => {
      const roomTypeId = params['id'];
      if (roomTypeId) {
        this.loadRoomTypeDetails(roomTypeId);
      }
    });
  }

  initRoomTypeForm(): void {
    this.roomTypeForm = this.formBuilder.group({
      id: [''],
      type: ['', Validators.required]
    });

  }

  loadRoomTypeDetails(roomTypeId: string): void {
    this.roomTypeService.getRoomTypeById(roomTypeId).subscribe({
      next: (roomType: any) => {
        this.roomTypeForm.patchValue({
          id: roomType.id,
          type: roomType.type
        });
        this.modificationReussi = true;
      },
      error: (error: any) => {
        console.log('Error fetching room type details:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.roomTypeForm.valid) {
      const formValue = this.roomTypeForm.value;
          if (formValue.id) {
            this.roomTypeService.updateRoomType(formValue.id, formValue.type)
              .subscribe(updatedRoomType => {
                this.openUpdatesDialog();
                console.log('Type de chambre mis à jour :', updatedRoomType);
              });
          } else {
            this.roomTypeService.addRoomType(formValue.type)
              .subscribe(newRoomType => {
                this.openSuccessDialog();
                console.log('Nouveau type de chambre ajouté :', newRoomType);
                this.router.navigate(['/hotelerie', 'room-type', newRoomType]);
              });
          }
        }
  }

  isFormValid(): boolean {
    return this.roomTypeForm.valid;
  }

  openSuccessDialog(): void {
    this.dialog.open(DialogajouterComponent, {
      width: '20%',
      height: '20%',
    });
  }

  openUpdatesDialog(): void {
    this.dialog.open(DialogmodifierComponent, {
      width: '20%',
      height: '20%',
    });
  }
}
