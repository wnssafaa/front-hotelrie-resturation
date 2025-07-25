import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WardListComponent } from './ward-list.component';
import { WardService } from '../../services/ward.service';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { of } from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {NgBusyModule} from "ng-busy";
import {MatDialogModule} from "@angular/material/dialog";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../app.module";

fdescribe('WardListComponent', () => {
  let component: WardListComponent;
  let fixture: ComponentFixture<WardListComponent>;
  let wardServiceSpy: jasmine.SpyObj<WardService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const wardServiceSpyObj = jasmine.createSpyObj('WardService', ['getAllWards', 'deleteWard', 'searchWardByName']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [WardListComponent],
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
        { provide: WardService, useValue: wardServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        {provide: ActivatedRoute, useValue: {params: of({id: '1'})}}
      ]
    }).compileComponents();

    wardServiceSpy = TestBed.inject(WardService) as jasmine.SpyObj<WardService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    wardServiceSpy.getAllWards.and.returnValue(of([])); // mock return value
    wardServiceSpy.searchWardByName.and.returnValue(of([])); // mock return value
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardListComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should load wards on init', () => {
    const mockWards = [
      { id: '1', code: 'W01', name: 'Ward 1', isPrivate: false },
      { id: '2', code: 'W02', name: 'Ward 2', isPrivate: true }
    ];
    wardServiceSpy.getAllWards.and.returnValue(of(mockWards));
    component.ngOnInit();
    fixture.detectChanges();
    expect(wardServiceSpy.getAllWards).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockWards);
  });


  it('should navigate to edit ward', () => {
    const ward = { id: 1, code: 'W01', name: 'Ward 1', isPrivate: false };
    component.editWard(ward);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hotelerie', 'ward', ward.id]);
  });

  it('should delete a ward', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const mockWards = [
      { id: '1', code: 'W01', nom: 'Ward 1', isPrivate: false },
      { id: '2', code: 'W02', nom: 'Ward 2', isPrivate: true }
    ];
    wardServiceSpy.getAllWards.and.returnValue(of(mockWards));
    wardServiceSpy.deleteWard.and.returnValue(of({}));

    component.loadWards();
    component.deleteWard(mockWards[0]);

    expect(window.confirm).toHaveBeenCalledWith(`Êtes-vous sûr de vouloir supprimer le pavillon ${mockWards[0].nom}?`);

    expect(wardServiceSpy.getAllWards).toHaveBeenCalledTimes(2);
  });

  it('should search for wards by name', () => {
    const searchTerm = 'Ward 1';
    const mockSearchResult = [
      { id: 1, code: 'W01', name: 'Ward 1', isPrivate: false }
    ];
    wardServiceSpy.searchWardByName.and.returnValue(of(mockSearchResult));
    component.searchWard(searchTerm);
    expect(wardServiceSpy.searchWardByName).toHaveBeenCalledWith(searchTerm);
    expect(component.dataSource.data).toEqual(mockSearchResult);
  });

  it('should load all wards if search term is empty', () => {
    const mockWards = [
      { id: 1, code: 'W01', name: 'Ward 1', isPrivate: false },
      { id: 2, code: 'W02', name: 'Ward 2', isPrivate: true }
    ];
    wardServiceSpy.getAllWards.and.returnValue(of(mockWards));
    component.searchWard('');
    expect(wardServiceSpy.getAllWards).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockWards);
  });
});
