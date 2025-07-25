import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MenuComponent } from './menu.component';
import { MenuService } from '../../services/menu.service';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
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
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {createTranslateLoader} from "../../../app.module";
import {CommonModule} from "@angular/common";
fdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuServiceSpy: jasmine.SpyObj<MenuService>;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  const mockMenu = {
    id: '1',
    title: 'menu test',
    meal: ['Repas 1', 'Repas 2'],
    isCanceled: false
  };

  const mockMeals = [
    { label: 'Repas 1' },
    { label: 'Repas 2' }
  ];

  beforeEach(async () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['getmenuById', 'getrepas', 'addMenu', 'updateMenu']);
    activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], { params: of({ id: '1' }) });
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
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
        { provide: MenuService, useValue: menuServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MatDialog, useValue: dialogSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    expect(component.menuForm).toBeDefined();
    expect(component.menuForm.controls['id']).toBeDefined();
    expect(component.menuForm.controls['title']).toBeDefined();
    expect(component.menuForm.controls['meal']).toBeDefined();
    expect(component.menuForm.controls['isCanceled']).toBeDefined();

  });

 /* it('should load menu details', () => {
    menuServiceSpy.getMenuById.and.returnValue(of(mockMenu));
    component.loadMenuDetails('1');
    expect(menuServiceSpy.getMenuById).toHaveBeenCalledWith('1');
    expect(component.menuForm.value).toEqual(mockMenu);
    expect(component.modificationReussi).toBeTrue();
  });


  it('should add new menu', () => {
    component.menuForm.setValue(mockMenu);
    menuServiceSpy.addMenu.and.returnValue(of(mockMenu));
    component.addMenu();
    expect(menuServiceSpy.addMenu).toHaveBeenCalledWith(mockMenu);
  });*/


});

