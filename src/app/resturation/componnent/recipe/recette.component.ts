import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IngredientService } from "../../services/ingredient.service";
import { RecetteService } from "../../services/recette.service";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { DialogajouterComponent } from "../../dialogs/dialogajouter/dialogajouter.component";
import { DialogmodifierComponent } from "../../dialogs/dialogmodifier/dialogmodifier.component";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.sass']
})
export class RecetteComponent implements OnInit {
  recetteForm!: FormGroup;
  modificationReussi: boolean = false;
  ingredients$ = this.ingredientService.getIngredients();


  constructor(
    private fb: FormBuilder,
    public recetteService: RecetteService,
    private route: ActivatedRoute,
    private ingredientService: IngredientService,
    private translateService: TranslateService,
    public dialog: MatDialog,
    private router: Router
  ) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
    this.initForm();
    if (this.route?.params) {
      this.route.params.subscribe(params => {
        const recetteId = params?.['id'];
        if (recetteId) {
          console.log('Recette ID:', recetteId);
          this.loadRecetteDetails(recetteId);
        } else {
          console.error('Recette ID is undefined or null');
        }
      });
    } else {
      console.error('Route or params is undefined');
    }

    this.translateService.setDefaultLang('en');
  }

  initForm(): void {
    this.recetteForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      Category: ['', Validators.required],
      ProductionValue: [0, Validators.min(0)],
      unitProductionValue: ['', Validators.required],
      IngredientRecipe: this.fb.array([]),
      SousRecipe: this.fb.array([]),
      isCanceled: [false]
    });

    this.ingredientService.getIngredients().subscribe(ingredients => {
      this.ingredients$ = of(ingredients);
    });
  }

  loadRecetteDetails(recetteId: string): void {
    this.recetteService.getRecetteById(recetteId).subscribe(recette => {
      if (recette) {

        this.recetteForm.patchValue({
          id: recette.id,
          name: recette.name,
          Category: recette.Category,
          ProductionValue: recette.ProductionValue ,
          unitProductionValue: recette.uniteProductionValue ,
          isCanceled: recette.isCanceled,
          ingredientRecipes: recette.ingredientRecipes ,
          sousRecipes: recette.sousRecipes,
        });

        const ingredientRecipesArray = this.ingredientRecipesFormArray;
        ingredientRecipesArray.clear();
        recette.ingredientRecipes.forEach((ingredientRecipe:any) => {
          const ingredientFormGroup = this.fb.group({
            quantity: [ingredientRecipe.quantity, Validators.min(0)],
            unit: [ingredientRecipe.unit, Validators.required],
            ingredient: [ingredientRecipe.ingredient.id, Validators.required],
          });
          ingredientRecipesArray.push(ingredientFormGroup);
        });

        const sousRecettesArray = this.sousRecettesFormArray;
        sousRecettesArray.clear();
        recette.sousRecipes.forEach((sousRecipe:any) => {
          const sousRecetteFormGroup = this.fb.group({
            name: [sousRecipe.name, Validators.required],
            productionValue: [sousRecipe.productionValue, Validators.min(0)],
            unitProductionValue: [sousRecipe.unitProductionValue, Validators.required],
          });
          sousRecettesArray.push(sousRecetteFormGroup);
        });
      }
    });
    this.modificationReussi=true
  }


  onSubmit(): void {
    if (this.recetteForm.valid) {
      const formValues = this.recetteForm.value;
      console.log('Form values before submission:', formValues);

      const recette = {
        ...formValues,
        ingredientRecipes: formValues.IngredientRecipe.map((ingredientRecipe: any) => ({
          quantity: ingredientRecipe.quantity,
          ingredient: {
            id: parseInt(ingredientRecipe.ingredient.id, 10),
            name: ingredientRecipe.ingredient.name || 'name',
            price: ingredientRecipe.ingredient.price || 0,
            unitPrice: ingredientRecipe.ingredient.unitPrice || 'unitPrice',
            supplier: ingredientRecipe.ingredient.supplier || 'supplier'
          },
          unit: ingredientRecipe.unit
        })),
        sousRecipes: formValues.SousRecipe.map((sousRecipe: any) => ({
          name: sousRecipe.name,
          productionValue: sousRecipe.productionValue,
          unitProductionValue: sousRecipe.unitProductionValue
        }))
      };

      console.log('Recette object to be sent:', recette);

      if (recette.id) {
        this.recetteService.updateRecette(recette).subscribe(
          updatedRecette => {
            this.openUpdatesDialog();
            console.log('Recette mise à jour :', updatedRecette);
          },
          error => {
            console.error('Erreur lors de la mise à jour de la recette :', error);
          }
        );
      } else {
        this.recetteService.addRecette(recette).subscribe(
          addedRecette => {
            this.openSuccessDialog();
            console.log('Nouvelle recette ajoutée :', addedRecette);
            this.router.navigate(['/resturation', 'recipe', addedRecette.id]);
            this.recetteForm.patchValue(addedRecette);
          },
          error => {
            console.error('Erreur lors de l\'ajout de la recette :', error);
          }
        );
      }
    }
  }


  get ingredientRecipesFormArray() {
    return this.recetteForm.get('IngredientRecipe') as FormArray;
  }

  get sousRecettesFormArray() {
    return this.recetteForm.get('SousRecipe') as FormArray;
  }

  addSousRecette(): void {
    const sousRecetteFormGroup = this.fb.group({
      name: ['', Validators.required],
      productionValue: [0, Validators.min(0)],
      unitProductionValue: ['', Validators.required],
    });

    this.sousRecettesFormArray.push(sousRecetteFormGroup);
  }

  addIngredient(): void {
    const ingredientRecipeFormGroup = this.fb.group({
      ingredient: ['', Validators.required],
      quantity: [0, Validators.min(0)],
      unit: ['', Validators.required],
    });

    this.ingredientRecipesFormArray.push(ingredientRecipeFormGroup);
  }

  annulerAjoutIngredient(): void {
    this.ingredientRecipesFormArray.removeAt(this.ingredientRecipesFormArray.length - 1);
  }

  annulersousrecete(): void {
    this.sousRecettesFormArray.removeAt(this.sousRecettesFormArray.length - 1);
  }

  isFormValid(): boolean {
    return this.recetteForm.valid;
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
      data: { message: 'L\'ingrédient a été modifié avec succès!' }
    });
  }
}
