import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { of } from 'rxjs';
import { RegimeComponent } from './regime.component';
import { RegimService } from '../../services/regim.service';
import { MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Apollo, ApolloModule} from "apollo-angular";
import {HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {AppModule} from "../../../app.module";

fdescribe('RegimeComponent', () => {
  let component: RegimeComponent;
  let fixture: ComponentFixture<RegimeComponent>;
  let regimServiceSpy: jasmine.SpyObj<RegimService>;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    regimServiceSpy = jasmine.createSpyObj('RegimService', ['getRegimes', 'deleteRegime', 'addRegime', 'updateRegime', 'searchRegimesByLabel']);
    translateServiceSpy = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);

    await TestBed.configureTestingModule({
      declarations: [RegimeComponent],
      imports: [ReactiveFormsModule,ReactiveFormsModule,
        FormsModule,AppModule,
        TranslateModule.forRoot(),
        MatSidenavModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule,
        FormsModule, MatCardModule, MatToolbarModule, MatTableModule,
        ReactiveFormsModule, MatIconModule,
        MatSelectModule, CommonModule, TranslateModule, RouterLink, RouterModule, NoopAnimationsModule,FormsModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatRadioModule,MatIconModule,MatTableModule,
        CommonModule,RouterLink,RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule,MatListModule,MatSidenavModule,MatToolbarModule,
        MatSelectModule ,MatPaginatorModule,MatCardModule,],
      providers: [
        FormBuilder,
        Apollo,
        { provide: RegimService, useValue: regimServiceSpy },
        { provide: TranslateService, useValue: translateServiceSpy },
        { provide: MatPaginator, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
      ]
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    component.initRegimeForm();
    expect(component.regimeForm).toBeDefined();
    expect(component.regimeForm.get('id')).toBeDefined();
    expect(component.regimeForm.get('code')).toBeDefined();
    expect(component.regimeForm.get('description')).toBeDefined();
    expect(component.regimeForm.get('label')).toBeDefined();
    expect(component.regimeForm.get('iscanceled')).toBeDefined();
  });




  it('should add or update regime - adding', () => {
    const mockRegime = { id: '', code: 'A', description: 'Description A', label: 'Label A', iscanceled: false };
    component.regimeForm = formBuilder.group(mockRegime);
    regimServiceSpy.addRegime.and.returnValue(of(mockRegime));

    component.addOrUpdateRegime();

    expect(regimServiceSpy.addRegime).toHaveBeenCalledWith(mockRegime);

  });

  it('should add or update regime - updating', () => {
    const mockRegime = { id: '1', code: 'A', description: 'Description A', label: 'Label A', iscanceled: false };
    component.regimeForm = formBuilder.group(mockRegime);
    regimServiceSpy.updateRegime.and.returnValue(of(mockRegime));
    component.addOrUpdateRegime();
    expect(regimServiceSpy.updateRegime).toHaveBeenCalledWith(mockRegime);
  });

});
