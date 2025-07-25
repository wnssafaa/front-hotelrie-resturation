import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommandeComponent } from './commande.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommandService } from '../../services/command.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RepasService } from '../../services/repas.service';
import { NotificationsService } from '../../services/notifications.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {DialogconfirmComponent} from "../../dialogs/dialogconfirm/dialogconfirm.component";
import {DialogsupdateComponent} from "../../dialogs/dialogsupdate/dialogsupdate.component";

fdescribe('CommandeComponent', () => {
  let component: CommandeComponent;
  let fixture: ComponentFixture<CommandeComponent>;
  let commandService: CommandService;
  let repasService: RepasService;
  let dialog: MatDialog;
  let router: Router;
  let notificationsService: NotificationsService;

  beforeEach(async () => {
    const commandServiceStub = {
     getCommandeById: () => of({ id: '1', status: 'En Attente', meal: [], patient: 'Patient1', date: '2024-05-05', isCanceled: false }),
      addCommande: () => of({ id: '1' }),
      updateCommande: () => of({})
    };

    const repasServiceStub = {
      getRepas: () => of([{ id: 1, type: 'Type1', label: 'Repas1' }])
    };

    const dialogStub = {
      open: jasmine.createSpy('open').and.returnValue({ afterClosed: () => of('confirm') })
    };

    const routerStub = {
      navigate: jasmine.createSpy('navigate')
    };

    const notificationsServiceStub = {
      addCommandNotification: jasmine.createSpy('addCommandNotification')
    };

    await TestBed.configureTestingModule({
      declarations: [CommandeComponent],
      providers: [
        FormBuilder,
        { provide: CommandService, useValue: commandServiceStub },
        { provide: RepasService, useValue: repasServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: MatDialog, useValue: dialogStub },
        { provide: NotificationsService, useValue: notificationsServiceStub },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandeComponent);
    component = fixture.componentInstance;
    commandService = TestBed.inject(CommandService);
    repasService = TestBed.inject(RepasService);
    dialog = TestBed.inject(MatDialog);
    router = TestBed.inject(Router);
    notificationsService = TestBed.inject(NotificationsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de la méthode loadMeals
  it('should load meals on initialization', () => {
    component.loadMeals();
    expect(component.repasList).toEqual([{ id: 1, type: 'Type1', label: 'Repas1' }]);
  });

  // Test de la méthode loadCommandeDetails
  it('should load commande details', () => {
    component.loadCommandeDetails('1');
    expect(component.commandeForm.value).toEqual({
      id: '1',
      status: 'En Attente',
      meal: [],
      date: '2024-05-05',
      patient: 'Patient1',
      isCanceled: false
    });
  });

  // Test de la méthode onSubmit pour l'ajout de commande
  it('should add a new commande and navigate', () => {
    component.commandeForm.setValue({
      id: '',
      status: 'En Attente',
      meal: [1],
      patient: 'Patient1',
      date: '2024-05-05',
      isCanceled: false
    });
    spyOn(component.commandService, 'addCommande').and.callThrough();
    component.onSubmit();
    expect(component.commandService.addCommande).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/resturation', 'commande', '1']);
  });

  // Test de la méthode onSubmit pour la mise à jour de commande
  it('should update an existing commande', () => {
    component.commandeForm.setValue({
      id: '1',
      status: 'En Attente',
      meal: [1],
      patient: 'Patient1',
      date: '2024-05-05',
      isCanceled: false
    });
    spyOn(component.commandService, 'updateCommande').and.callThrough();
    component.onSubmit();
    expect(component.commandService.updateCommande).toHaveBeenCalledWith(
      '1',
      'En Attente',
      [{ id: 1, type: 'Type1', label: 'Repas1' }],
      'Patient1',
      '2024-05-05',
      false
    );
  });

  // Test de la méthode openConfirmDialog
  it('should open confirm dialog', () => {
    component.openConfirmDialog('Test Dialog');
    expect(dialog.open).toHaveBeenCalledWith(DialogconfirmComponent, {
      width: '30%',
      height: '20%',
      data: { message: 'Test Dialog' }
    });
  });

  // Test de la méthode openupdateDialog
  it('should open update dialog', () => {
    component.openupdateDialog('Test Update Dialog');
    expect(dialog.open).toHaveBeenCalledWith(DialogsupdateComponent, {
      width: '30%',
      height: '20%',
      data: { message: 'Test Update Dialog' }
    });
  });
});
