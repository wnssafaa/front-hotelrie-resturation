import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListregimComponent } from './listregim.component';
import { RegimService } from '../../services/regim.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {NgBusyModule} from "ng-busy";
import {MatDialogModule} from "@angular/material/dialog";
import {ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {createTranslateLoader} from "../../../app.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
fdescribe('ListregimComponent', () => {
  let component:ListregimComponent;
  let fixture: ComponentFixture<ListregimComponent>;
  let regimServiceSpy: jasmine.SpyObj<RegimService>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  beforeEach(async () => {
    regimServiceSpy = jasmine.createSpyObj('RegimService', ['getRegimes', 'deleteRegime', 'cancelregime','searchRegimesByLabel']);

    await TestBed.configureTestingModule({
      declarations: [ ListregimComponent ],
      imports: [FormsModule,NgBusyModule,MatDialogModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatRadioModule,MatIconModule,MatTableModule,
        CommonModule,RouterLink,RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule,MatListModule,MatSidenavModule,MatToolbarModule,
        MatSelectModule ,MatPaginatorModule,MatCardModule, MatMenuTrigger,MatMenuModule,MatProgressBarModule,NoopAnimationsModule,RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,

            deps: [HttpClient]
          }
        }),
      ],
      providers: [
        { provide: RegimService, useValue: regimServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListregimComponent);
    component = fixture.componentInstance;

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load regimes on initialization', () => {
    const regimes = [
      { id: '1', code: 'code1', description: 'desc1', label: 'label1', iscanceled: false },
      { id: '2', code: 'code2', description: 'desc2', label: 'label2', iscanceled: false }
    ];
    regimServiceSpy.getRegimes.and.returnValue(of(regimes));
    component.ngOnInit();
    expect(component.ngOnInit)
  });

  it('should navigate to edit regime page when editRegime is called', () => {
    const regime = { id: '1', code: 'code1', description: 'desc1', label: 'label1', iscanceled: false };
    const routerSpy = spyOn(component.router, 'navigate').and.callThrough();
    component.editregime(regime);
    expect(routerSpy).toHaveBeenCalledWith(['/resturation', 'diet', regime.id]);
  });



});
