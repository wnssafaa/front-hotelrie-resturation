import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IngredientService } from '../../services/ingredient.service';
import {MatDialog} from "@angular/material/dialog";
import {DialogajouterComponent} from "../../dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../dialogs/dialogmodifier/dialogmodifier.component";
import {HttpClient} from "@angular/common/http";




@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.sass'],
})
export class IngredientComponent implements OnInit {
  ingredientForm!: FormGroup;
  modificationReussi: boolean = false;
  ingredient:any = {
    id: '',
    nom: '',
    unitprice: '',
    price: '',
    fournisseur: '',
    is_Canceled: false,
  };
  busy!: Promise<any>;

  constructor(
    private fb: FormBuilder,
    public ingredientService: IngredientService,
    private route: ActivatedRoute,
    public translateService: TranslateService,
    public dialog: MatDialog,
    private http: HttpClient,
    private router:Router
  ) {
    this.busy = this.http.get('').toPromise();
    translateService.setDefaultLang('en');
    translateService.use('en');
  }


  ngOnInit(): void {
    this.initForm();
    this.route.params?.subscribe((params) => {
      const ingredientId = params['id'];
        this.loadIngredientDetails(ingredientId);
    });

  }
 loadIngredientDetails(ingredientId: string): void {
    const ingredient$ = this.ingredientService.getIngredientById(ingredientId);
    if (ingredient$) {
      ingredient$.subscribe(ingredient => {
        if (ingredient && this.ingredientForm) {
          this.ingredientForm.patchValue({
            id: ingredient.id,
            name: ingredient.name,
            unitPrice: ingredient.unitPrice,
            supplier: ingredient.supplier,
            price: ingredient.price,
            isCanceled: ingredient.isCanceled
          });
        }
        this.modificationReussi = true;
      });
    }
  }

  initForm(): void {
    this.ingredientForm = this.fb.group({
      id: [this.ingredient.id],
      name: [this.ingredient.name, Validators.required],
      unitPrice: [this.ingredient.unitPrice, Validators.required],
      supplier: [this.ingredient.supplier, Validators.required],
      price: [this.ingredient.price, Validators.required],
      isCanceled: [false],
    });
  }
  addOrUpdateIngredient(): void {
    if (this.ingredientForm.valid) {
      const newIngredient = this.ingredientForm.value;
      if (newIngredient.id) {
        this.ingredientService.updateIngredient(newIngredient.id, newIngredient.name, newIngredient.price, newIngredient.unitPrice, newIngredient.supplier,newIngredient.isCanceled)
          .subscribe(() => {
            this.openupdatesDialog();
            this.ingredientService.getIngredients().subscribe(ingredients => {});

            this.router.navigate(['/resturation', 'Ingredient', newIngredient.id]);
          });
      } else {
        this.ingredientService.addIngredient(newIngredient.name, newIngredient.price, newIngredient.unitPrice, newIngredient.supplier)
          .subscribe((addedIngredient: any) => {
            this.openSuccessDialog();
            this.ingredientService.getIngredients();

            this.router.navigate(['/resturation', 'Ingredient', addedIngredient.id]);
          });
      }
    }
  }




  isFormValid(): boolean {
    return this.ingredientForm.valid;
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
      data: { message: 'L\'ingrédient a été modifier avec succès!' }
    });
  }

}
