import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BedTypeComponent } from './bed-type.component';
import { BedTypeService } from '../../services/bed-type.service';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { of } from 'rxjs';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgBusyModule} from "ng-busy";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../app.module";

describe('BedTypeComponent', () => {
  let component: BedTypeComponent;
  let fixture: ComponentFixture<BedTypeComponent>;
  let bedTypeServiceSpy: jasmine.SpyObj<BedTypeService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync(() => {
    const bedTypeServiceSpyObj = jasmine.createSpyObj('BedTypeService', ['gettypeById', 'addBedType', 'updateBedType']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [BedTypeComponent],
      imports: [
        FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatTableModule,
        CommonModule, RouterLink, RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule, MatListModule, MatSidenavModule, MatToolbarModule,
        MatSelectModule, MatPaginatorModule, NgBusyModule, MatDialogModule, NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        { provide: BedTypeService, useValue: bedTypeServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ]
    }).compileComponents();

    bedTypeServiceSpy = TestBed.inject(BedTypeService) as jasmine.SpyObj<BedTypeService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load bed type details', () => {
    const mockBedType = { id: '1', label: 'Type 1' };
    // @ts-ignore
    bedTypeServiceSpy.getBedTypeById.and.returnValue(of(mockBedType));

    component.ngOnInit();

    expect(component.bedTypeForm.value).toEqual(mockBedType);
  });

  it('should add a new bed type', () => {
    const mockBedType = { id: '2', label: 'Type 2' };
    // @ts-ignore
    bedTypeServiceSpy.addBedType.and.returnValue(of(mockBedType));
    component.bedTypeForm.setValue({ id: '', label: 'Type 2' });

    component.onSubmit();

    expect(bedTypeServiceSpy.addBedType).toHaveBeenCalledWith('Type 2');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hotelerie', 'bed-type', '2']);
  });

  it('should update an existing bed type', () => {
    const mockBedType = { id: 1, label: 'Type Updated' };
    // @ts-ignore
    bedTypeServiceSpy.updateBedType.and.returnValue(of(mockBedType));
    component.bedTypeForm.setValue(mockBedType);

    component.onSubmit();

    expect(bedTypeServiceSpy.updateBedType).toHaveBeenCalledWith('1', 'Type Updated');
  });
});
