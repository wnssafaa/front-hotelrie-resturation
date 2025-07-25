import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuildingService } from '../../services/building.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import {DialogajouterComponent} from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../../resturation/dialogs/dialogmodifier/dialogmodifier.component";


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.sass']
})
export class BuildingComponent implements OnInit {
  buildingForm!: FormGroup;
  modificationReussi: boolean = false;
  codeOrNameExists: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public buildingService: BuildingService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.initBuildingForm();
    this.route.params.subscribe(params => {
      const buildingId = params['id'];
      if (buildingId) {
        this.loadBuildingDetails(buildingId);
      }
    });
  }
  initBuildingForm(): void {
    this.buildingForm = this.formBuilder.group({
      id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
  loadBuildingDetails(buildingId: string): void {
    this.buildingService.getBuildingById(buildingId).subscribe({
      next: (building: any) => {
        this.buildingForm.patchValue({
          id: building.id,
          code: building.code,
          name: building.name,
        });
        this.modificationReussi = true;
      },
      error: (error: any) => {
        console.log('Error fetching building details:', error);
      }
    });
  }
  onSubmit(): void {
    if (this.buildingForm.valid) {
      const formValue = this.buildingForm.value;

          if (formValue.id) {
            this.buildingService.updateBatiment(formValue.id, formValue.code, formValue.name).subscribe(updatedBuilding => {
                this.codeOrNameExists=false
                console.log('Building mise à jour :', updatedBuilding);
                this.openupdatesDialog()
              });
          } else {

            this.buildingService.addBatiment(formValue.code, formValue.name)
              .subscribe(newBuilding => {
                this.codeOrNameExists=false
                console.log('Nouveau bâtiment ajouté :', newBuilding);
                this.router.navigate(['/hotelerie', 'building', newBuilding]);
                this.openSuccessDialog()
              });
          }

    }
  }
  isFormValid(): boolean {
    return this.buildingForm.valid;
  }
  openSuccessDialog(): void {
    this.dialog.open(DialogajouterComponent, {
      width: '20%',
      height:'20%',
    });
  }
  openupdatesDialog(): void {
    this.dialog.open(DialogmodifierComponent, {
      width: '20%',
      height:'20%',

    });
  }

}
