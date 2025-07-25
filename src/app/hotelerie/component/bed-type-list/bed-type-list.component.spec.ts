import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BedTypeListComponent } from './bed-type-list.component';
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

fdescribe('BedTypeListComponent', () => {
  let component: BedTypeListComponent;
  let fixture: ComponentFixture<BedTypeListComponent>;
  let bedTypeServiceSpy: jasmine.SpyObj<BedTypeService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync(() => {
    const bedTypeServiceSpyObj = jasmine.createSpyObj('BedTypeService', ['getAllBedTypes', 'deleteBedType', 'searchtypelit']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);
    TestBed.configureTestingModule({
      declarations: [BedTypeListComponent],
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
        {provide: BedTypeService, useValue: bedTypeServiceSpyObj},
        {provide: Router, useValue: routerSpyObj},
        {provide: MatDialog, useValue: dialogSpyObj},
        {provide: ActivatedRoute, useValue: {params: of({id: '1'})}}
      ]
    }).compileComponents().then();

    bedTypeServiceSpy = TestBed.inject(BedTypeService) as jasmine.SpyObj<BedTypeService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedTypeListComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load bed types', () => {
    const mockBedTypes = [{ id: 1, label: 'Type 1' }, { id: 2, label: 'Type 2' }];
    bedTypeServiceSpy.getAllBedTypes.and.returnValue(of(mockBedTypes));

    component.ngOnInit();

    expect(component.dataSource.data).toEqual(mockBedTypes);
  });


  it('should navigate to edit bed type', () => {
    const mockBedType = { id: '1', label: 'Type 1' };
    component.editBedType(mockBedType);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hotelerie', 'bed-type', '1']);
  });

  it('should delete bed type', fakeAsync(() => {
    const mockBedType = { id: '1', label: 'Type 1' };
    const mockBedTypes = [{ id: '1', label: 'Type 1' }, { id: '2', label: 'Type 2' }];
    bedTypeServiceSpy.deleteBedType.and.returnValue(of({ __typename: 'BedTypeTypeMutation', delete: { __typename: 'MutationSuccessType', success: true } }));
    // @ts-ignore
    bedTypeServiceSpy.getAllBedTypes.and.returnValue(of(mockBedTypes));

    spyOn(window, 'confirm').and.returnValue(true);
    fixture.detectChanges();
    component.deleteBedType(mockBedType);
    tick();

    expect(bedTypeServiceSpy.deleteBedType).toHaveBeenCalledWith('1');
    expect(bedTypeServiceSpy.getAllBedTypes).toHaveBeenCalled();
  }));



});
