import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RoomListComponent } from './room-list.component';
import { RoomService } from '../../services/room.service';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { NgBusyModule } from 'ng-busy';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../../../app.module';
import {ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { MatMenuModule } from '@angular/material/menu';

fdescribe('RoomListComponent', () => {
  let component: RoomListComponent;
  let fixture: ComponentFixture<RoomListComponent>;
  let roomServiceSpy: jasmine.SpyObj<RoomService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const roomServiceSpyObj = jasmine.createSpyObj('RoomService', ['getAllChambres', 'deleteChambre', 'searchChambre']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ RoomListComponent ],
      imports: [
        FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatTableModule,
        CommonModule, RouterLink, RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule, MatListModule, MatSidenavModule, MatToolbarModule,
        MatSelectModule, MatPaginatorModule, NgBusyModule, MatDialogModule, NoopAnimationsModule, MatMenuModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        { provide: RoomService, useValue: roomServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        { provide: MatDialog, useValue: dialogSpyObj },
        {provide: ActivatedRoute, useValue: {params: of({id: '1'})}}
      ]
    }).compileComponents();

    roomServiceSpy = TestBed.inject(RoomService) as jasmine.SpyObj<RoomService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to edit room', fakeAsync(() => {
    const mockRoom = { id: '1', label: 'Room 1', code: 'R01' };

    component.editRoom(mockRoom);
    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hotelerie', 'room', '1']);
  }));

  /*it('should load rooms on init', fakeAsync(() => {
    const mockRooms = [{ id: '1', label: 'Room 1', code: 'R01' }];
    roomServiceSpy.getAllChambres.and.returnValue(of(mockRooms));
    fixture.detectChanges();
    tick();

    expect(roomServiceSpy.getAllChambres).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockRooms);
  }));

  it('should delete a room', fakeAsync(() => {
    const mockRoom = { id: '1', label: 'Room 1', code: 'R01' };
    roomServiceSpy.deleteChambre.and.returnValue(of({}));
    roomServiceSpy.getAllChambres.and.returnValue(of([mockRoom]));
    spyOn(window, 'confirm').and.returnValue(true);
    fixture.detectChanges();
    component.deleteRoom(mockRoom);
    tick();

    expect(roomServiceSpy.deleteChambre).toHaveBeenCalledWith('1');
    expect(roomServiceSpy.getAllChambres).toHaveBeenCalled();
  }));

  it('should load all rooms if search term is empty', fakeAsync(() => {
    const mockRooms = [{ id: '1', label: 'Room 1', code: 'R01' }];
    roomServiceSpy.getAllChambres.and.returnValue(of(mockRooms));
    fixture.detectChanges();
    component.searchRoom('');
    tick();

    expect(roomServiceSpy.getAllChambres).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockRooms);
  }));*/
});
