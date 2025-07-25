import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WardComponent } from './ward.component';
import { WardService } from '../../services/ward.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
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
import { MatCheckboxModule } from "@angular/material/checkbox";

fdescribe('WardComponent', () => {
  let component: WardComponent;
  let fixture: ComponentFixture<WardComponent>;
  let wardServiceSpy: jasmine.SpyObj<WardService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const wardServiceSpyObj = jasmine.createSpyObj('WardService', ['getWardById', 'addWard', 'updateWard', 'checkPavillonExistence']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [WardComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        CommonModule,
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
        RouterModule,
        MatCheckboxModule,
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
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ]
    }).compileComponents();

    wardServiceSpy = TestBed.inject(WardService) as jasmine.SpyObj<WardService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new ward', fakeAsync(() => {
    const newWard = { name: 'Ward 2', code: 'W02', description: 'Description', isPrivate: false };
    wardServiceSpy.addWard.and.returnValue(of({ ...newWard, id: '2' }));

    component.wardForm.setValue({ ...newWard, id: '' });

    component.onSubmit();
    tick();

    expect(wardServiceSpy.addWard).toHaveBeenCalledWith(newWard.name, newWard.code, newWard.description, newWard.isPrivate);

  }));

  it('should update an existing ward', fakeAsync(() => {
    const updatedWard = { id: 1, name: 'Ward Updated', code: 'W01', description: 'Updated Description', isPrivate: false };
    wardServiceSpy.updateWard.and.returnValue(of(updatedWard));

    component.wardForm.setValue(updatedWard);

    component.onSubmit();
    tick();

    expect(wardServiceSpy.updateWard).toHaveBeenCalledWith(updatedWard.id, updatedWard.name, updatedWard.code, updatedWard.description, updatedWard.isPrivate);
  }));
});
