import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BedTypeService } from '../../services/bed-type.service';
import { MatDialog } from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogajouterComponent} from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../../resturation/dialogs/dialogmodifier/dialogmodifier.component";

@Component({
  selector: 'app-bed-type',
  templateUrl: './bed-type.component.html',
  styleUrls: ['./bed-type.component.sass']
})
export class BedTypeComponent implements OnInit {
  bedTypeForm!: FormGroup;
  modificationReussi: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public bedTypeService: BedTypeService,
    private dialog: MatDialog,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initBedTypeForm();
    this.route.params.subscribe(params => {
      const typeId = params['id'];
      if (typeId) {
        this.loadBedTypeDetails(typeId);
      }
    });
  }

  initBedTypeForm(): void {
    this.bedTypeForm = this.formBuilder.group({
      id: [''],
      label: ['', Validators.required]
    });
  }

  loadBedTypeDetails(id: string): void {
    this.bedTypeService.getBedTypeById(id).subscribe({
      next: (bedType) => {
        this.bedTypeForm.patchValue({
          id: bedType.id,
          label:bedType.label
        });
        this.modificationReussi = true;
      },
      error: (error) => {
        console.error('error lors du chargement des détails du type de lit :', error);

      }
    });
  }
  onSubmit(): void {
    if (this.bedTypeForm.valid) {
      const formValue = this.bedTypeForm.value;
      if (formValue.id) {
        this.bedTypeService.updateBedType(formValue.id, formValue.label)
          .subscribe(updatedBedType => {
            this.openupdatesDialog()
            console.log('Type de lit mis à jour :', updatedBedType);
          });
      } else {
        this.bedTypeService.addBedType(formValue.label)
          .subscribe(newBedType => {
            this.openSuccessDialog()
            this.router.navigate(['/hotelerie', 'bed-type', newBedType]).then( );
            console.log('Nouveau type de lit ajouté :', newBedType);

          });
      }
    }
  }

  isFormValid(): boolean {
    return this.bedTypeForm.valid;
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

    });}


}
