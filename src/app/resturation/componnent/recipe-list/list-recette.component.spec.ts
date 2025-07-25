import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRecetteComponent } from './list-recette.component';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, convertToParamMap, Router, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {IngredientService} from "../../services/ingredient.service";
import {RecetteService} from "../../services/recette.service";
import {Apollo, ApolloModule} from "apollo-angular";
import {of} from "rxjs";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
fdescribe('ListRecetteComponent', () => {
  let component: ListRecetteComponent;
  let fixture: ComponentFixture<ListRecetteComponent>;
  let mockRecetteService: jasmine.SpyObj<RecetteService>;
  let recetteService: jasmine.SpyObj<RecetteService>;
  let mockTranslateService: jasmine.SpyObj<TranslateService>;


  beforeEach(async () => {

    mockRecetteService = jasmine.createSpyObj('RecetteService', ['getRecettes', 'deleteRecette']);
    mockRecetteService.getRecettes.and.returnValue(of([{ id: '1', nom: 'Recette 1' }, { id: '2', nom: 'Recette 2' }]));

    await TestBed.configureTestingModule({
      declarations: [ListRecetteComponent],
      imports: [ReactiveFormsModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatRadioModule, MatIconModule, MatTableModule,
        CommonModule, RouterLink, RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule, MatListModule, MatSidenavModule, MatToolbarModule,
        MatSelectModule, MatPaginatorModule, MatCardModule, MatMenuTrigger, MatMenuModule, NoopAnimationsModule, TranslateModule.forRoot(),
      ],
      providers: [
        FormBuilder,
        RouterLink,
        IngredientService,
        Router,
        Apollo,
        {provide: RecetteService, useValue: mockRecetteService},
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {paramMap: convertToParamMap({id: '1'})}}
        }
      ]
    }).compileComponents();



    fixture = TestBed.createComponent(ListRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to recette edit page when editRecette is called', () => {
    const recette = { id: '1', name: 'Test Recette', category: 'Test Categorie', ProductionValue: 10, uniteProduction: 'Test Unite', SousRecipe: [], IngredientRecipe: [], isCanceled: false };
    const navigateSpy = spyOn(component['router'], 'navigate').and.returnValue(Promise.resolve(true));
    component.editRecette(recette);
    expect(navigateSpy).toHaveBeenCalledWith(['/resturation', 'recipe', recette.id]);
  });


  it('should delete a recette', () => {
    const recette = { id: '1', name: 'Test Recette', category: 'Test Categorie', ProductionValue: 10, uniteProduction: 'Test Unite', SousRecipe: [], IngredientRecipe: [], isCanceled: false };;


    component.deleteRecette(recette.id);

    expect(mockRecetteService.deleteRecette).toHaveBeenCalled();
  });



});
