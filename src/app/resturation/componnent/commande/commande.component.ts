import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommandService } from '../../services/command.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import {RepasService} from "../../services/repas.service";
import {DialogconfirmComponent} from "../../dialogs/dialogconfirm/dialogconfirm.component";
import {DialogsupdateComponent} from "../../dialogs/dialogsupdate/dialogsupdate.component";
import moment from 'moment';
import {NotificationsService} from "../../services/notifications.service";


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.sass']
})
export class CommandeComponent implements OnInit {
  commandeForm!: FormGroup;
  modificationReussi: boolean = false;

  patients = [
    { id: 1, nom: 'patient1' },
    { id: 2, nom: 'patient2' },
    { id: 3, nom: 'patient3' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    public commandService: CommandService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private repasService: RepasService,
    private notificationsService: NotificationsService
  ) { }
  repasList: any[] = [];
  loadMeals(): void {
    this.repasService.getRepas().subscribe({
      next: (meals) => {
        this.repasList = meals.map((meal:any) => ({
          id: meal.id,
          type: meal.type || '',
          label: meal.label || 'N/A'
        }));
      },
      error: (error) => {
        console.error('Error fetching meals:', error);
        this.repasList = [];
      }
    });
  }



  ngOnInit(): void {
    this.initCommandeForm();
    this.loadMeals();
    this.route.params.subscribe(params => {
      const commandeId = params['id'];
      console.log(commandeId);
      this.loadCommandeDetails(commandeId)
    });

  }
  initCommandeForm(): void {
    this.commandeForm = this.formBuilder.group({
      id: [''],
      status: ['valider'],
      meal: [[], Validators.required],
      patient: ['', Validators.required],
      date: [moment().format('YYYY-MM-DD')],
      isCanceled: false,
    });
  }


  getStatusInitialValue(): string {

    return this.commandeForm.get('isCanceled')?.value ? 'Annuler' : 'Valider';
  }


  loadCommandeDetails(commandeId: string): void {
    this.commandService.getCommandeById(commandeId).subscribe({
      next: (commande: any) => {
        this.commande = commande;
        this.commandeForm.patchValue({
          id: commande.id,
          status: commande.status,
          meal: commande.meal.map((meal: any) => meal.id),
          date:commande.date,
          patient: commande.patient,
          isCanceled: commande.isCanceled
        });
        this.modificationReussi = true;
      },
      error: (error: any) => {
        console.log('Error fetching commande details:', error);
      }
    });

  }
  commandeAjoutee: boolean = true;
  commande: any=null;
  onSubmit(): void {
    if (this.commandeForm.valid) {
      const formValue = this.commandeForm.value;

      const selectedMealIds = formValue.meal;
      formValue.meal = selectedMealIds.map((mealId: string) => {
        const meal = this.repasList.find((m: any) => m.id === mealId);
        return {
          id: meal.id,
          type: meal.type,
          label: meal.label
        };
      });


      if (formValue.id) {
        this.commandService.updateCommande(formValue.id, formValue.status, formValue.meal, formValue.patient, formValue.date, formValue.isCanceled)
          .subscribe(updatedCommande => {
            console.log('Commande mise à jour :', updatedCommande);
            this.openupdateDialog('Modification de commande');
          });
      } else {
        this.commandService.addCommande(formValue.status, formValue.meal, formValue.patient, formValue.date, formValue.isCanceled)
          .subscribe(newCommande => {
            console.log('Nouvelle commande ajoutée :', newCommande);
            this.openConfirmDialog('Confirmation de commande');
            this.router.navigate(['/resturation', 'commande', newCommande.id]);
            this.commandeForm.patchValue(newCommande);
            this.commande = newCommande;
            this.notificationsService.addCommandNotification(formValue);
          });
      }
    }
  }

  isFormValid(): boolean {
    return this.commandeForm.valid;
  }
  openConfirmDialog(title: string): void {
    const dialogRef = this.dialog.open(DialogconfirmComponent, {
      width: '30%',
      height: '20%',
      data: { message: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
          this.commandService.addCommande(this.commandeForm.value.status,this.commandeForm.value.date, this.commandeForm.value.meal, this.commandeForm.value.patient, this.commandeForm.value.iscanceled).subscribe(addedCommande => {
            console.log('Nouvelle commande ajoutée :', addedCommande);


          }, (error) => {
            console.error('Erreur lors de l\'ajout de la commande :', error);
          });
        }

    });

  }

  openupdateDialog(title: string): void {
    const dialogRef = this.dialog.open(DialogsupdateComponent, {
      width: '30%',
      height: '20%',
      data: { message: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.commandService.updateCommande(this.commandeForm.value.id,this.commandeForm.value.date,this.commandeForm.value.status, this.commandeForm.value.meal, this.commandeForm.value.patient, this.commandeForm.value.iscanceled).subscribe(addedCommande => {
          console.log('commande modifier :', addedCommande);
        },)
      }

    });
  }
  editcommande(): void {

  this.commandeAjoutee=true
    this.commande=null
  }
  valide: boolean = true;
  valider(): void {
this.valide=false
  }
  cancelCommande(): void {
    if (this.commande) {
      const updatedCommande = { ...this.commande, isCanceled: true };
      updatedCommande.mealIds = this.repasList.map(meal => ({
        id: meal.id,
        type: meal.type || '',
        label: meal.label || 'N/A'
      }));
      this.commandService.updateCommande(updatedCommande.id, updatedCommande.status, updatedCommande.mealIds, updatedCommande.patient, updatedCommande.date, updatedCommande.isCanceled)
        .subscribe(updatedCommande => {
          console.log('Commande annulée :', updatedCommande);

        });
    }
  }


  openEvaluationForm(): void {
    this.router.navigate(['/resturation', 'Evaluation'], { queryParams: { id:this.commande.id } });

  }
}
