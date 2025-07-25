import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RepasService } from '../../services/repas.service';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogajouterComponent} from "../../dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../dialogs/dialogmodifier/dialogmodifier.component";
import {MatDialog} from "@angular/material/dialog";
import {RegimService} from "../../services/regim.service";

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.sass']
})
export class RepasComponent implements OnInit {
  repasForm!: FormGroup
  modificationReussi: boolean = false;

  regimesList: any[] = [];
  constructor(private formBuilder: FormBuilder,
              private repasService: RepasService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private router:Router,
              private regimeservice:RegimService) {
  }
  ngOnInit(): void {
    this.initRepasForm();
    this.getRegimesList()
    this.route.params?.subscribe((params) => {
      const repasId = params['id'];
      console.log(typeof repasId)
      this.loadrepasDetails(repasId);
    });
  }
  loadrepasDetails(RepastId: string): void {
    this.repasService.getRepasById(RepastId).subscribe(repas=> {
      if (repas) {
        this.repasForm.patchValue(
          {id:repas.id,
          type: repas.type,
          label: repas.label,
          price: repas.price,
          calorie: repas.calorie,
          availability: repas.availability,
          dietId: repas.diet.id,
          supplement: repas.supplement,
          belief: repas.belief,
          photo:repas.photo,
          isCanceled: repas.isCanceled}
        );
        this.modificationReussi=true
      }
    });
  }
  getRegimesList(): void {
    this.regimeservice.getRegimes().subscribe(regimes => {
      this.regimesList = regimes;
    });}
  initRepasForm(): void {
    this.repasForm = this.formBuilder.group({
      id:[''],
      type: ['', Validators.required],
      label: ['', Validators.required],
      price: ['', Validators.required],
      calorie: ['', Validators.required],
      availability: ['', Validators.required],
      dietId: ['', Validators.required],
      supplement: [''],
      belief: [''],
      photo: [''],
      isCanceled: [false],
    });}
  file: string = '';
  onFileChange(event: any) {
    const files = event.target.files as FileList;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.repasForm.patchValue({ photo: base64String });
      };
      reader.readAsDataURL(file);
    }
  }
  addOrUpdaterMeal(): void {
    if (this.repasForm.valid) {
      const formValues = this.repasForm.value;
      if (formValues.id) {
        this.repasService.updateRepas(formValues).subscribe()
          this.openUpdatesDialog();}
          else {
        this.repasService.addRepas(formValues).subscribe(addedRepas => {
          this.openSuccessDialog();
          console.log('Nouveau repas ajouté :', addedRepas);
          this.router.navigate(['/restauration', 'meal', addedRepas.id]);
          this.repasForm.patchValue(addedRepas);
        }, (error) => {
          console.error('Erreur lors de l\'ajout du repas :', error);
        });
      }
    }
  }


  isFormValid(): boolean {
    return this.repasForm.valid;
  }
  openSuccessDialog(): void {
    this.dialog.open(DialogajouterComponent, {
      width: '30%',
      height:'20%',
    });
  }
  openUpdatesDialog(): void {
    this.dialog.open(DialogmodifierComponent, {
      width: '30%',
      height:'20%',

    });
  }
}
