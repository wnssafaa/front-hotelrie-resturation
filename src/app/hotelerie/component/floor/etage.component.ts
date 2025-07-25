import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuildingService } from '../../services/building.service';
import { EtageService } from '../../services/etage.service';
import { ActivatedRoute, Router } from "@angular/router";
import {DialogajouterComponent} from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../../resturation/dialogs/dialogmodifier/dialogmodifier.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-floor',
  templateUrl: './etage.component.html',
  styleUrls: ['./etage.component.sass']
})
export class EtageComponent implements OnInit {
  etageForm!: FormGroup;
  batiments: any[] = [];
  modificationReussi: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public buildingService: BuildingService,
    public etageService: EtageService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.initEtageForm();
    this.loadBatiments();
    this.route.params.subscribe(params => {
      const etageId = params['id'];
      if (etageId) {
        this.loadEtageDetails(etageId);
      }
    });
  }
  initEtageForm(): void {
    this.etageForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      code: [''],
      building: ['', Validators.required],
      description: [''],
    });
  }
  loadBatiments(): void {
    this.buildingService.getAllBatiments().subscribe({
      next: (batiments: any[]) => {
        this.batiments = batiments;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des bâtiments:', error);
      }
    });
  }
  loadEtageDetails(etageId: string): void {
    this.etageService.getFloorById(etageId).subscribe({
      next: (etage: any) => {
        this.etageForm.patchValue({
          id: etage.id,
          name: etage.name,
          code: etage.code,
          building: etage.building.id,
          description:etage.description
        });
        this.modificationReussi = true;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des détails de l\'étage:', error);
      }
    });
  }
  codeOrNameExists: boolean = false;
  onSubmit(): void {
    if (this.etageForm.valid) {
      const formValue = this.etageForm.value;
      const building = { id: parseInt(formValue.building, 10) };
      if (formValue.id) {
        this.etageService.updateFloor(formValue.id, formValue.name, formValue.code, formValue.description, building)
          .subscribe(updatedEtage => {
            console.log('Étage mis à jour :', updatedEtage);
            this.openUpdatesDialog();
          }, error => {
            console.error('Erreur lors de la mise à jour de l\'étage:', error);
          });
      } else {
        this.etageService.createFloor(formValue.name, formValue.code, building, formValue.description)
          .subscribe(newEtage => {
            console.log('Nouvel étage ajouté :', newEtage);
            this.router.navigate(['/hotelerie', 'floor', newEtage.id]);
            this.openSuccessDialog();
          }, error => {
            console.error('Erreur lors de l\'ajout de l\'étage:', error);
          });
      }
    }
  }




  isFormValid(): boolean {
    return this.etageForm.valid
  }
  openSuccessDialog(): void {
    this.dialog.open(DialogajouterComponent, {
      width: '20%',
      height:'20%',
    });
  }
  openUpdatesDialog(): void {
    this.dialog.open(DialogmodifierComponent, {
      width: '20%',
      height:'20%',

    });}


}
