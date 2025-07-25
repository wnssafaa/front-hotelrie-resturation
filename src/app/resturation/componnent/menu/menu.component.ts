import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogajouterComponent} from "../../dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "../../dialogs/dialogmodifier/dialogmodifier.component";
import {MatDialog} from "@angular/material/dialog";
import {RepasService} from "../../services/repas.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  menuForm!: FormGroup;
  meals: any[] = [];
  modificationReussi: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public menuService: MenuService,
    private route: ActivatedRoute,
    private dialog:MatDialog,
    private router:Router,
    private repasservice:RepasService
  ) {}

  ngOnInit(): void {
    this.initMenuForm();
    this.loadMeals();
    this.route.params.subscribe((params) => {
      const regimId = params['id'];
      this.loadMenuDetails(regimId);
    });
  }

  initMenuForm(): void {
    this.menuForm = this.formBuilder.group({
      id:[''],
      title: ['', Validators.required],
      meal: [[], Validators.required],
      isCanceled:false
    });
  }
  loadMenuDetails(menuId: string): void {
    this.menuService.getMenuById(menuId).subscribe((menu) => {
      if (menu) {
        this.menuForm.patchValue({
          id: menu.id,
          title: menu.title,
          meal: menu.meal.map((meal: any) => meal.id),
          isCanceled: menu.isCanceled
        });
        this.modificationReussi = true;
      }
    });
  }
  loadMeals(): void {
    this.repasservice.getRepas().subscribe(meals => {
      this.meals = meals;
    });
  }

  addMenu(): void {
    if (this.menuForm.valid) {
      const formValue = this.menuForm.value;
      const selectedMealIds = formValue.meal;
      formValue.mealIds = selectedMealIds.map((mealId: string) => {
        const meal = this.meals.find((m: any) => m.id === mealId);
        return {
          id: meal.id,
          type: meal.type,
          label: meal.label
        };
      });

      if (formValue.id) {
        this.menuService.updateMenu(formValue).subscribe(updatedMenu => {
          console.log('Menu mis à jour :', updatedMenu);
          this.openupdatesDialog();
        });
      } else {
        this.menuService.addMenu(formValue).subscribe(newMenu => {
          console.log('Nouveau menu ajouté :', newMenu);
          this.openSuccessDialog();
          this.router.navigate(['/resturation', 'menu', newMenu.id]);
          this.menuForm.patchValue(newMenu);
        });
      }
    }
  }



  isFormValid(): boolean {
    return this.menuForm.valid;
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
