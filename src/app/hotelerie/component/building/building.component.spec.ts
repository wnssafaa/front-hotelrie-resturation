import { ComponentFixture, TestBed} from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuildingComponent } from './building.component';
import { BuildingService } from '../../services/building.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";
import { ApolloModule } from "apollo-angular";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { GraphqlModule } from "../../../graphql.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgBusyModule } from "ng-busy";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { createTranslateLoader } from "../../../app.module";

fdescribe('BuildingComponent', () => {
  let component: BuildingComponent;
  let fixture: ComponentFixture<BuildingComponent>;
  let buildingServiceSpy: jasmine.SpyObj<BuildingService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const buildingServiceSpyObj = jasmine.createSpyObj('BuildingService', ['getBuildingById', 'checkbulidnigdExistence', 'addBatiment', 'updateBatiment']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [BuildingComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatIconModule,
        MatTableModule,
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterModule,
        ApolloModule,
        HttpClientModule,
        GraphqlModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatPaginatorModule,
        NgBusyModule,
        MatDialogModule,
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
    fixture = TestBed.createComponent(BuildingComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load building details', () => {
    const mockBuilding = { id: '1', code: 'A1', name: 'Building 1' };
    buildingServiceSpy.getBuildingById.and.returnValue(of(mockBuilding));

    component.ngOnInit();

    expect(component.buildingForm.value).toEqual(mockBuilding);
  });


});
