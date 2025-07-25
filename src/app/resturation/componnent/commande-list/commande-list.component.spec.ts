import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { CommandeListComponent } from './commande-list.component';
import { CommandService } from '../../services/command.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { of } from 'rxjs';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
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
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../app.module";

fdescribe('CommandeListComponent', () => {
  let component: CommandeListComponent;
  let fixture: ComponentFixture<CommandeListComponent>;
  let commandeService: jasmine.SpyObj<CommandService>;
  let router: jasmine.SpyObj<Router>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const commandeServiceSpy = jasmine.createSpyObj('CommandService', [
      'getAllCommandes',
      'cancelCommande',
      'searchcommandeBypatient',
      'updateLocalCanceledCommande'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    await TestBed.configureTestingModule({
      declarations: [CommandeListComponent],
      imports: [FormsModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatRadioModule,MatIconModule,MatTableModule,
        CommonModule,RouterLink,RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule,MatListModule,MatSidenavModule,MatToolbarModule,
        MatSelectModule ,MatPaginatorModule,NgBusyModule,MatDialogModule,NoopAnimationsModule,MatPaginator,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),

      ],
      providers: [
        { provide: CommandService, useValue: commandeServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MatDialog, useValue: dialogSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        }

      ],
    }).compileComponents();



    fixture = TestBed.createComponent(CommandeListComponent);
    component = fixture.componentInstance;
    commandeService = TestBed.inject(CommandService) as jasmine.SpyObj<CommandService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load commandes', fakeAsync(() => {
    const mockCommandes = [{ id: '1', patient: 'John Doe' }];
    commandeService.getAllCommandes.and.returnValue(of(mockCommandes));
    component.loadCommandes();
    tick(1000);
    expect(component.isLoading).toBe(false);
    expect(component.dataSource.data).toEqual(mockCommandes);


  }));

  it('should navigate to edit commande', () => {
    const mockCommande = { id: '1', patient: 'John Doe' };
    component.editcommande(mockCommande);
    expect(router.navigate).toHaveBeenCalledWith(['/resturation', 'commande', mockCommande.id]);
  });


  it('should search commandes by patient', () => {
    const mockSearchTerm = 'John';
    const mockCommandes = [{ id: '1', patient: 'John Doe' }];
    commandeService.searchcommandeBypatient.and.returnValue(of(mockCommandes));
    component.searchByPatient(mockSearchTerm);
    expect(commandeService.searchcommandeBypatient).toHaveBeenCalledWith(mockSearchTerm);


  });

});
