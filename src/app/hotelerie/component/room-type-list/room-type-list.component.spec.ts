import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoomTypeListComponent } from './room-type-list.component';
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

fdescribe('RoomTypeListComponent', () => {
  let component: RoomTypeListComponent;
  let fixture: ComponentFixture<RoomTypeListComponent>;
  let roomTypeServiceSpy: jasmine.SpyObj<RoomTypeService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync(() => {
    const roomTypeServiceSpyObj = jasmine.createSpyObj('RoomTypeService', ['getAllRoomTypes', 'deleteRoomType', 'searchtypechambre']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);
    const mockRoomTypes = [{ id: 1, type: 'Single' }, { id: 2, type: 'Double' }]; // Changed id to number

    TestBed.configureTestingModule({
      declarations: [RoomTypeListComponent],
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
    fixture = TestBed.createComponent(RoomTypeListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load room types', () => {
    const mockRoomTypes = [{ id: 1, type: 'Single' }, { id: 2, type: 'Double' }];
    roomTypeServiceSpy.getAllRoomTypes.and.returnValue(of(mockRoomTypes));

    component.ngOnInit();

    expect(component.dataSource.data).toEqual(mockRoomTypes);
  });

  it('should navigate to edit room type', () => {
    const mockRoomType = { id: 1, type: 'Single' };
    component.editRoomType(mockRoomType);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hotelerie', 'room-type', 1]);
  });

  it('should delete room type', fakeAsync(() => {
    const mockRoomType = { id: 1, type: 'Single' };
    const mockRoomTypes = [{ id: 1, type: 'Single' }, { id: 2, type: 'Double' }];
    roomTypeServiceSpy.deleteRoomType.and.returnValue(of({ delete: { success: true } })); // Updated mock return value
    roomTypeServiceSpy.getAllRoomTypes.and.returnValue(of(mockRoomTypes));

    spyOn(window, 'confirm').and.returnValue(true);
    fixture.detectChanges();
    component.deleteRoomType(mockRoomType);
    tick();

    expect(roomTypeServiceSpy.deleteRoomType).toHaveBeenCalledWith(1);
    expect(roomTypeServiceSpy.getAllRoomTypes).toHaveBeenCalled();
  }));

  it('should search room types', () => {
    const searchTerm = 'Single';
    const mockFilteredRoomTypes = [{ id: 1, type: 'Single' }];
    roomTypeServiceSpy.searchtypechambre.and.returnValue(of(mockFilteredRoomTypes));

    component.searchetypeCHAMBRE(searchTerm);

    expect(roomTypeServiceSpy.searchtypechambre).toHaveBeenCalledWith(searchTerm);
    expect(component.dataSource.data).toEqual(mockFilteredRoomTypes);
  });

  it('should reload all room types if search term is empty', () => {
    const mockRoomTypes = [{ id: 1, type: 'Single' }, { id: 2, type: 'Double' }];
    roomTypeServiceSpy.getAllRoomTypes.and.returnValue(of(mockRoomTypes));

    component.searchetypeCHAMBRE('');

    expect(roomTypeServiceSpy.getAllRoomTypes).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockRoomTypes);
  });
});
