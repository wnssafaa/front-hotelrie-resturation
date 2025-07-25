import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListIngredientComponent } from '../ingredient-list/list-ingredient.component';
import { MatInputModule } from "@angular/material/input";
import { AppModule, createTranslateLoader } from "../../../app.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, convertToParamMap, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { IngredientService } from '../../services/ingredient.service';
import { RecetteService } from "../../services/recette.service";
import { MatPaginatorModule } from '@angular/material/paginator';
import { of } from 'rxjs';
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { ApolloModule } from "apollo-angular";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { GraphqlModule } from "../../../graphql.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";

fdescribe('ListIngredientComponent', () => {
  let component: ListIngredientComponent;
  let fixture: ComponentFixture<ListIngredientComponent>;
  let ingredientService: IngredientService;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListIngredientComponent],
      imports: [
        ReactiveFormsModule, FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatRadioModule, MatIconModule, MatTableModule,
        RouterLink, RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule, MatListModule, MatSidenavModule, MatToolbarModule,
        MatSelectModule, MatPaginatorModule, MatCardModule, MatMenuTrigger, MatMenuModule, NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [
        FormBuilder,
        IngredientService,
        RecetteService,
        TranslateService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: '1' }) } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListIngredientComponent);
    component = fixture.componentInstance;
    ingredientService = TestBed.inject(IngredientService);
    translateService = TestBed.inject(TranslateService);

    spyOn(ingredientService, 'getIngredients').and.returnValue(of([]));
    spyOn(ingredientService, 'deleteIngredient').and.returnValue(of({}));
    spyOn(ingredientService, 'searchIngredientsByName').and.returnValue(of([]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to ingredient edit page when editIngredient is called', () => {
    const ingredient = { id: '1', name: 'Test ingredient', unitPrice: '10', price: '20', supplier: 'Test Supplier', isCanceled: false };
    const navigateSpy = spyOn(component['router'], 'navigate').and.returnValue(Promise.resolve(true));
    component.editIngredient(ingredient);
    expect(navigateSpy).toHaveBeenCalledWith(['/resturation', 'ingredient', ingredient.id]);
  });


  it('should delete an ingredient', () => {
    const ingredient = { id: '1', name: 'Test ingredient', unitPrice: '10', price: '20', supplier: 'Test Supplier', isCanceled: false };
    component.deleteIngredient(ingredient);
    expect(ingredientService.deleteIngredient).toHaveBeenCalledWith(ingredient.id);
  });

  it('should search ingredients', () => {
    const searchQuery = 'Test';
    component.searchTerm = searchQuery;
    component.searchBynom(searchQuery);
    expect(ingredientService.searchIngredientsByName).toHaveBeenCalledWith(searchQuery);
  });


  it('should cancel an ingredient', () => {
    const ingredient =  { id: '1', name: 'Test ingredient', unitPrice: '10', price: '20', supplier: 'Test Supplier', isCanceled: false };

    component.cancelIngredient(ingredient);

    expect(!ingredient.isCanceled).toBeTruthy();
  });


});
