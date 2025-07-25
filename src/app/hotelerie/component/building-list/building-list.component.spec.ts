import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BuildingListComponent } from './building-list.component';
import { BuildingService } from '../../services/building.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
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

fdescribe('BuildingListComponent', () => {
  let component: BuildingListComponent;
  let fixture: ComponentFixture<BuildingListComponent>;
  let buildingServiceSpy: jasmine.SpyObj<BuildingService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const buildingServiceSpyObj = jasmine.createSpyObj('BuildingService', ['getAllBatiments', 'deleteBatiment', 'searchBatimentName']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ BuildingListComponent ],
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
        { provide: BuildingService, useValue: buildingServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ]
    }).compileComponents();

    buildingServiceSpy = TestBed.inject(BuildingService) as jasmine.SpyObj<BuildingService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load buildings on init', fakeAsync(() => {
    const mockBuildings = [{ id: 1, code: 'A1', name: 'Building 1' }];
    buildingServiceSpy.getAllBatiments.and.returnValue(of(mockBuildings));
    fixture.detectChanges();
    tick();

    expect(buildingServiceSpy.getAllBatiments).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockBuildings);
  }));


  it('should navigate to edit building', fakeAsync(() => {
    const mockBuilding = { id: '1', code: 'A1', name: 'Building 1' };

    component.editbuilding(mockBuilding);
    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hotelerie', 'building', '1']);
  }));

  it('should delete a building', fakeAsync(() => {
    const mockBuilding = { id: '1', code: 'A1', name: 'Building 1' };
    buildingServiceSpy.deleteBatiment.and.returnValue(of({ success: true }));
    // @ts-ignore
    buildingServiceSpy.getAllBatiments.and.returnValue(of([mockBuilding]));
    spyOn(window, 'confirm').and.returnValue(true);
    fixture.detectChanges();
    component.deleteBuilding(mockBuilding);
    tick();

    expect(buildingServiceSpy.deleteBatiment).toHaveBeenCalledWith('1');
    expect(buildingServiceSpy.getAllBatiments).toHaveBeenCalled();
  }));



  it('should load all buildings if search term is empty', fakeAsync(() => {
    const mockBuildings = [{ id: 1, code: 'A1', name: 'Building 1' }];
    buildingServiceSpy.getAllBatiments.and.returnValue(of(mockBuildings));
    fixture.detectChanges();
    component.searchbuilding('');
    tick();

    expect(buildingServiceSpy.getAllBatiments).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockBuildings);
  }));

});
