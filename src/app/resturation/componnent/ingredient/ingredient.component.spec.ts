import { TestBed, ComponentFixture } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// @ts-ignore
import { IngredientComponent } from './ingredient.component';
import { IngredientService } from '../../services/ingredient.service';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../app.module";

fdescribe('IngredientComponent', () => {
  let component: IngredientComponent;
  let fixture: ComponentFixture<IngredientComponent>;
  let ingredientServiceSpy: jasmine.SpyObj<IngredientService>;
  let translateService: TranslateService;
  const mockActivatedRoute = {
    params: of({ id: '1' }) // Mocking params
  };
  beforeEach(async () => {

    const spy = jasmine.createSpyObj('IngredientService', ['getIngredients', 'getIngredientById', 'addIngredient', 'updateIngredient', 'searchIngredientsByName']);

    await TestBed.configureTestingModule({
      declarations: [IngredientComponent],
      imports: [ReactiveFormsModule,FormsModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatRadioModule,MatIconModule,MatTableModule,
        CommonModule,RouterLink,RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule,MatListModule,MatSidenavModule,MatToolbarModule,
        MatSelectModule ,MatPaginatorModule,MatCardModule, MatMenuTrigger,MatMenuModule,NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [
        TranslateService,
        { provide: IngredientService, useValue: spy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(IngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    translateService = TestBed.inject(TranslateService);
    ingredientServiceSpy = TestBed.inject(IngredientService) as jasmine.SpyObj<IngredientService>;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize the form', () => {
    component.ngOnInit();
    expect(component.ingredientForm).toBeDefined();
  });
  it('should load ingredient details', () => {
    const mockIngredientId = '1';
    const mockIngredient = { id: '1', name: 'ingredient 1', unitPrice: 10, price: 20, supplier: 'Supplier', isCanceled: false }; ingredientServiceSpy.getIngredientById.and.returnValue(of(mockIngredient));
    component.loadIngredientDetails(mockIngredient.id);

    expect(component.ingredientForm.value.id).toEqual(mockIngredient.id);
    expect(component.ingredientForm.value.name).toEqual(mockIngredient.name);

  });

  it('should add ingredient', () => {
    const mockFormValues = {
      name: 'ingredient 1',
      unitPrice: 'kg',
      price: 20,
      supplier: 'Supplier',
      isCanceled: false
    };
    const mockIngredient = { id: '1', name: 'ingredient 1', unitPrice: 10, price: 20, supplier: 'Supplier', isCanceled: false };
    ingredientServiceSpy.getIngredientById.and.returnValue(of(mockIngredient));

    component.addOrUpdateIngredient();
ingredientServiceSpy.addIngredient(mockFormValues.name, mockFormValues.price, mockFormValues.unitPrice, mockFormValues.supplier)

    expect(ingredientServiceSpy.addIngredient).toHaveBeenCalled()

  });


});
