import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoomTypeComponent } from './room-type.component';
import { RoomTypeService } from '../../services/room-type.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
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

fdescribe('RoomTypeComponent', () => {
  let component: RoomTypeComponent;
  let fixture: ComponentFixture<RoomTypeComponent>;
  let roomTypeServiceSpy: jasmine.SpyObj<RoomTypeService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync(() => {
    const roomTypeServiceSpyObj = jasmine.createSpyObj('RoomTypeService', ['getRoomTypeById', 'addRoomType', 'updateRoomType', 'checktypeExistence']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [RoomTypeComponent],
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
        { provide: RoomTypeService, useValue: roomTypeServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ]
    }).compileComponents();

    roomTypeServiceSpy = TestBed.inject(RoomTypeService) as jasmine.SpyObj<RoomTypeService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load room type details', () => {
    const mockRoomType = { id: 1, type: 'Single' }; // Assurez-vous que 'id' est un nombre
    roomTypeServiceSpy.getRoomTypeById.and.returnValue(of(mockRoomType));

    component.ngOnInit();

    expect(component.roomTypeForm.value).toEqual(mockRoomType);
  });

  it('should add a new room type', () => {
    const mockRoomType = { id: 2, type: 'Double' };
    const mockResponse = { save: mockRoomType };
    roomTypeServiceSpy.addRoomType.and.returnValue(of(mockResponse));

    component.roomTypeForm.setValue({ id: '', type: 'Double' });

    component.onSubmit();

    expect(roomTypeServiceSpy.addRoomType).toHaveBeenCalledWith('Double');

  });


  it('should update an existing room type', () => {
    const mockRoomType = { id: 1, type: 'Updated Type' }; // Assurez-vous que 'id' est un nombre
    roomTypeServiceSpy.updateRoomType.and.returnValue(of({ save: mockRoomType }));

    component.roomTypeForm.setValue(mockRoomType);

    component.onSubmit();

    expect(roomTypeServiceSpy.updateRoomType).toHaveBeenCalledWith(1, 'Updated Type');
  });



});
