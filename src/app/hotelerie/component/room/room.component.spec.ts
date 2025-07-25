import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoomComponent } from './room.component';
import { RoomService } from '../../services/room.service';
import { EtageService } from '../../services/etage.service';
import { RoomTypeService } from '../../services/room-type.service';
import { BedTypeService } from '../../services/bed-type.service';
import { WardService } from '../../services/ward.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { createTranslateLoader } from "../../../app.module";
import { DialogajouterComponent } from "../../../resturation/dialogs/dialogajouter/dialogajouter.component";
import { DialogmodifierComponent } from "../../../resturation/dialogs/dialogmodifier/dialogmodifier.component";

describe('RoomComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;
  let roomServiceSpy: jasmine.SpyObj<RoomService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let etageServiceSpy: jasmine.SpyObj<EtageService>;
  let roomTypeServiceSpy: jasmine.SpyObj<RoomTypeService>;
  let bedTypeServiceSpy: jasmine.SpyObj<BedTypeService>;
  let wardServiceSpy: jasmine.SpyObj<WardService>;

  beforeEach(async () => {
    const roomServiceSpyObj = jasmine.createSpyObj('RoomService', ['getChambreById', 'addChambre', 'updateChambre']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);
    const etageServiceSpyObj = jasmine.createSpyObj('EtageService', ['getAllEtages']);
    const roomTypeServiceSpyObj = jasmine.createSpyObj('RoomTypeService', ['getAllRoomTypes']);
    const bedTypeServiceSpyObj = jasmine.createSpyObj('BedTypeService', ['getAllBedTypes']);
    const wardServiceSpyObj = jasmine.createSpyObj('WardService', ['getAllPavillons']);

    await TestBed.configureTestingModule({
      declarations: [RoomComponent, DialogajouterComponent, DialogmodifierComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatPaginatorModule,
        MatDialogModule,
        NoopAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [
        { provide: RoomService, useValue: roomServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        { provide: MatDialog, useValue: dialogSpyObj },
        { provide: EtageService, useValue: etageServiceSpyObj },
        { provide: RoomTypeService, useValue: roomTypeServiceSpyObj },
        { provide: BedTypeService, useValue: bedTypeServiceSpyObj },
        { provide: WardService, useValue: wardServiceSpyObj },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ]
    }).compileComponents();

    roomServiceSpy = TestBed.inject(RoomService) as jasmine.SpyObj<RoomService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    etageServiceSpy = TestBed.inject(EtageService) as jasmine.SpyObj<EtageService>;
    roomTypeServiceSpy = TestBed.inject(RoomTypeService) as jasmine.SpyObj<RoomTypeService>;
    bedTypeServiceSpy = TestBed.inject(BedTypeService) as jasmine.SpyObj<BedTypeService>;
    wardServiceSpy = TestBed.inject(WardService) as jasmine.SpyObj<WardService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
