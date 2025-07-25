import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RepasComponent } from './repas.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { ApolloModule } from "apollo-angular";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { GraphqlModule } from "../../../graphql.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { of } from "rxjs";
import { RepasService } from "../../services/repas.service";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { createTranslateLoader } from "../../../app.module";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";

describe('RepasComponent', () => {
  let component: RepasComponent;
  let fixture: ComponentFixture<RepasComponent>;
  let formBuilder: FormBuilder;
  let repasService: jasmine.SpyObj<RepasService>;
  let activatedRoute: ActivatedRoute;
  let translateService: TranslateService;

  beforeEach(async () => {
    const repasServiceSpy = jasmine.createSpyObj('RepasService', ['getRepasById', 'addRepas', 'updateRepas']);

    await TestBed.configureTestingModule({
      declarations: [RepasComponent],
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
        { provide: RepasService, useValue: repasServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        },
        TranslateService
      ]
    }).compileComponents();

    repasService = TestBed.inject(RepasService) as jasmine.SpyObj<RepasService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    activatedRoute = TestBed.inject(ActivatedRoute);
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    const spy = spyOn(component, 'initRepasForm').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.repasForm).toBeDefined();
  });

  it('should load repas details', () => {
    const mockRepas = {
      id: '1',
      type: '',
      label: '',
      price: '',
      calorie: '',
      availability: '',
      dietId: '',
      supplement: '',
      belief: '',
      photo: '',
      isCanceled: false
    };

    repasService.getRepasById.and.returnValue(of(mockRepas));

    component.loadrepasDetails('1');

    expect(component.repasForm.value).toEqual(mockRepas);
  });

  it('should add meal if not exists', () => {
    const mockRepas = {
      id: '',
      type: '',
      label: '',
      price: '',
      calorie: '',
      availability: '',
      dietId: '',
      supplement: '',
      belief: '',
      photo: '',
      isCanceled: false
    };

    spyOn(component, 'openSuccessDialog').and.callThrough();
    component.repasForm.setValue(mockRepas);
    component.addOrUpdaterMeal();

    expect(repasService.addRepas).toHaveBeenCalledWith(mockRepas);
    expect(component.openSuccessDialog).toHaveBeenCalled();
  });

  it('should update meal if exists', () => {
    const mockRepas = {
      id: '1',
      type: '',
      label: '',
      price: '',
      calorie: '',
      availability: '',
      dietId: '',
      supplement: '',
      belief: '',
      photo: '',
      isCanceled: false
    };

    spyOn(component, 'openUpdatesDialog').and.callThrough();
    component.repasForm.setValue(mockRepas);
    component.addOrUpdaterMeal();

    expect(repasService.updateRepas).toHaveBeenCalledWith(mockRepas);
    expect(component.openUpdatesDialog).toHaveBeenCalled();
  });
});
