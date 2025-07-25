import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WardService } from "../../services/ward.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import {DialogajouterComponent} from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../../resturation/dialogs/dialogmodifier/dialogmodifier.component";


@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrls: ['./ward.component.sass']
})
export class WardComponent implements OnInit {
  wardForm!: FormGroup;
  modificationReussi: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public wardService: WardService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initWardForm();
    this.route.params.subscribe(params => {
      const wardId = params['id'];
      if (wardId) {
        this.loadWardDetails(wardId);
      }
    });
  }

  initWardForm(): void {
    this.wardForm = this.formBuilder.group({
      id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      isPrivate: [false]
    });
  }

  loadWardDetails(wardId: string): void {
    this.wardService.getWardById(wardId).subscribe({
      next: (ward: any) => {
        this.wardForm.patchValue({
          id: ward.id,
          code: ward.code,
          name: ward.name,
          description: ward.description,
          isPrivate: ward.isPrivate
        });
        this.modificationReussi = true;
      },
      error: (error: any) => {
        console.log('Error fetching ward details:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.wardForm.valid ) {
      const formValue = this.wardForm.value;

      if (formValue.id) {
        this.wardService.updateWard(formValue.id, formValue.name, formValue.code, formValue.description, formValue.isPrivate)
          .subscribe(updatedWard => {
            this.openupdatesDialog()
            console.log('Ward mise à jour :', updatedWard);
          });
      } else {
        this.wardService.addWard(formValue.name, formValue.code, formValue.description, formValue.isPrivate)
          .subscribe(newWard => {
            this.openSuccessDialog()
            console.log('Nouveau pavillon ajouté :', newWard);
            this.router.navigate(['/hotelerie', 'ward', newWard.id]);
            this.wardForm.patchValue(newWard);
          });
      }
    }
  }

  isFormValid(): boolean {
    return this.wardForm.valid;
  }
  isprivate(): boolean {
    return this.wardForm.value.isprivate=true;
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
