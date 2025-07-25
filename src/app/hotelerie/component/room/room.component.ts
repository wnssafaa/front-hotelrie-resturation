import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import {DialogajouterComponent} from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../../resturation/dialogs/dialogmodifier/dialogmodifier.component";
import {EtageService} from "../../services/etage.service";
import {RoomTypeService} from "../../services/room-type.service";
import {BedTypeService} from "../../services/bed-type.service";
import {WardService} from "../../services/ward.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {
  roomForm!: FormGroup;
  etages: any[] = [];
  pavillons: any[] = [];
  bedTypes: any[] = [];
  roomTypes: any[] = [];
  modificationReussi: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    public formBuilder: FormBuilder,
    public roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    public etageService: EtageService,
    public roomTypeService: RoomTypeService,
    public bedTypeService: BedTypeService,
    public wardService: WardService,

  ) { }
  ngOnInit(): void {
    this.loadEtages();
    this.loadPavillons();
    this.loadBedTypes();
    this.loadRoomTypes();
    this.initRoomForm();
    this.loadlitTypes()
    this.route.params.subscribe(params => {
      const roomId = params['id'];
      if (roomId) {
        this.loadRoomDetails(roomId);
      }
    });

  }
  loadEtages(): void {
    this.etageService.getAllFloors().subscribe((etages) => {
      this.etages = etages;
    });
  }
  loadPavillons(): void {
    this.wardService.getAllWards().subscribe(pavillons => {
      this.pavillons = pavillons;
    });
  }

  loadBedTypes(): void {
    this.bedTypeService.getAllBedTypes().subscribe(bedTypes => {
      this.bedTypes = bedTypes;
    });
  }

  loadRoomTypes(): void {
    this.roomTypeService.getAllRoomTypes().subscribe(roomTypes => {
      this.roomTypes = roomTypes;
    });
  }
  loadlitTypes(): void {
    this.bedTypeService.getAllBedTypes().subscribe(litTypes => {
      this.bedTypes= litTypes;
    });
  }
  initRoomForm(): void {
    this.roomForm = this.formBuilder.group({
      id: [''],
      label: ['', Validators.required],
      code: ['', [Validators.required]],
      floor: ['', Validators.required],
      ward: ['', Validators.required],
      roomType: ['', Validators.required],
      options: [[]],
      bedCpt: ['', Validators.required],
      status: [''],
      bedCode: ['', [Validators.required]],
      bedStatus: [''],
      bedType: ['', [Validators.required]],
      bedName: ['']
    });
  }



  chambreOptions: string[] = [
    'Lit simple',
    'Lit double',
    'Lit king-size',
    'Chambre privée',
    'Chambre avec salle de bain privée'
  ];
  loadRoomDetails(roomId: string): void {
    this.roomService.getChambreById(roomId).subscribe({
      next: (room: any) => {
        this.roomForm.patchValue(
          {
          id: room.id,
          label: room.label,
          code: room.code,
          floor: room.floor.id,
          ward: room.ward.id,
          roomType: room.roomType.id,
          options: room.options,
          bedCpt: room.bedCpt,
          status: room.status,
          bedCode: room.bedCode,
          bedStatus: room.bedStatus,
          bedType: room.bedType.id,
            bedName:room.bedName
        });
        this.modificationReussi = true;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des détails de la chambre:', error);
      }
    });
  }


  onSubmit(): void {
    if (this.roomForm.valid) {
      const formValue = this.roomForm.value;
      formValue.bedType=this.roomForm.value.bedType
      if (formValue.id) {
        this.roomService.updateChambre(formValue)
          .subscribe(updatedRoom => {
            console.log('Chambre mise à jour :', updatedRoom);
            this.openUpdateDialog();
          }, error => {
            console.error('Erreur lors de la mise à jour de la chambre:', error);
          });
      } else {
        this.roomService.addChambre(formValue)
          .subscribe(newRoom => {
            console.log('Nouvelle chambre ajoutée :', newRoom);
            this.openSuccessDialog();
            this.router.navigate(['/hotelerie', 'room', newRoom.id])

          }, error => {
            console.error('Erreur lors de l\'ajout de la chambre:', error);
          });
      }
    }
  }


  isFormValid(): boolean {
    return this.roomForm.valid;
  }

  openSuccessDialog(): void {
    this.dialog.open(DialogajouterComponent, {
      width: '20%',
      height:'20%',
    });
  }

  openUpdateDialog(): void {
    this.dialog.open(DialogmodifierComponent, {
      width: '20%',
      height:'20%',
    });
  }
}
