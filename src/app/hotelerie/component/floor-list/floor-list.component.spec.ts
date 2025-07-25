import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FloorListComponent } from './floor-list.component';
import { EtageService } from '../../services/etage.service';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { ApolloModule } from "apollo-angular";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { GraphqlModule } from "../../../graphql.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { NgBusyModule } from "ng-busy";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { createTranslateLoader } from "../../../app.module";

fdescribe('FloorListComponent', () => {
  let component: FloorListComponent;
  let fixture: ComponentFixture<FloorListComponent>;
  let etageServiceSpy: jasmine.SpyObj<EtageService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let activatedRouteStub: Partial<ActivatedRoute>;
  beforeEach(async () => {
    const etageServiceSpyObj = jasmine.createSpyObj('EtageService', ['getAllFloors', 'deleteFloor', 'searchetageName']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);
    activatedRouteStub = {
      params: of({ id: '1' })
    };
    await TestBed.configureTestingModule({
      declarations: [FloorListComponent],
      imports: [
        FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatTableModule,
        CommonModule, ApolloModule, HttpClientModule, GraphqlModule, MatListModule, MatSidenavModule, MatToolbarModule,
        MatSelectModule, MatPaginatorModule, NgBusyModule, MatDialogModule, NoopAnimationsModule, RouterModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        { provide: EtageService, useValue: etageServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    etageServiceSpy = TestBed.inject(EtageService) as jasmine.SpyObj<EtageService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load floors on init', fakeAsync(() => {
    const mockFloors = [{ id: 1, name: 'Floor 1', code: 'F1', building: { id: 1 } }];
    etageServiceSpy.getAllFloors.and.returnValue(of(mockFloors));

    fixture.detectChanges();
    tick();

    expect(etageServiceSpy.getAllFloors).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockFloors);
  }));

  it('should navigate to edit floor', fakeAsync(() => {
    const mockFloor = { id: '1', nom: 'Floor 1', code: 'F1', batimentId: 'B1' };

    component.editEtage(mockFloor);
    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hotelerie', 'floor', '1']);
  }));

  it('should delete a floor', fakeAsync(() => {
    const mockFloor = { id: 1, name: 'Floor 1', code: 'F1', building: { id: 1 } };
    etageServiceSpy.deleteFloor.and.returnValue(of({}));
    etageServiceSpy.getAllFloors.and.returnValue(of([mockFloor]));
    spyOn(window, 'confirm').and.returnValue(true);
    fixture.detectChanges();
    component.deleteEtage(mockFloor);
    tick();

    expect(etageServiceSpy.deleteFloor).toHaveBeenCalledWith(1);
    expect(etageServiceSpy.getAllFloors).toHaveBeenCalled();
  }));

  it('should load all floors if search term is empty', fakeAsync(() => {
    const mockFloors = [{ id: 1, name: 'Floor 1', code: 'F1', building: { id: 1 } }];
    etageServiceSpy.getAllFloors.and.returnValue(of(mockFloors));
    fixture.detectChanges();
    component.searchFloor('');
    tick();

    expect(etageServiceSpy.getAllFloors).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockFloors);
  }));

});
