import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RecetteComponent } from './recette.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RecetteService } from "../../services/recette.service";
import { Apollo, ApolloModule } from "apollo-angular";
import { NgBusyModule } from "ng-busy";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { GraphqlModule } from "../../../graphql.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import {createTranslateLoader} from "../../../app.module";

fdescribe('RecetteComponent', () => {
  let component: RecetteComponent;
  let fixture: ComponentFixture<RecetteComponent>;
  let mockTranslateService: jasmine.SpyObj<TranslateService>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let recetteServiceSpy: jasmine.SpyObj<RecetteService>;

  beforeEach(async () => {
    mockTranslateService = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);
    mockActivatedRoute = {
      params: of({ id: 'testId' })
    };

    await TestBed.configureTestingModule({
      declarations: [RecetteComponent],
      imports: [
        FormsModule,
        NgBusyModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatIconModule,
        MatTableModule,
        CommonModule,
        RouterModule,
        ApolloModule,
        HttpClientModule,
        GraphqlModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCardModule,
        MatMenuModule,
        MatProgressBarModule,
        NoopAnimationsModule,
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
        Apollo,
        TranslateService,
        RecetteService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteComponent);
    component = fixture.componentInstance;
    recetteServiceSpy = TestBed.inject(RecetteService) as jasmine.SpyObj<RecetteService>;
    spyOn(recetteServiceSpy, 'addRecette').and.returnValue(of({}));
    spyOn(component, 'onSubmit').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    component.initForm();
    expect(component.recetteForm).toBeDefined();
  });




});
