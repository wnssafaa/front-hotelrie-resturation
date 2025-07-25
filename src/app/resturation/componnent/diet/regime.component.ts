import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegimService } from '../../services/regim.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DialogajouterComponent } from "../../dialogs/dialogajouter/dialogajouter.component";
import { DialogmodifierComponent } from "../../dialogs/dialogmodifier/dialogmodifier.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-regime',
  templateUrl: './regime.component.html',
  styleUrls: ['./regime.component.sass']
})
export class RegimeComponent implements OnInit {
  regimeForm!: FormGroup;
  modificationReussi: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public regimService: RegimService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  ngOnInit(): void {
    this.initRegimeForm();
    this.route.params.subscribe((params) => {
      const regimId = params['id'];
      console.log(typeof regimId)
      if (regimId) {
        this.loadRegimeDetails(regimId);
      }
    });
  }

  initRegimeForm(): void {
    this.regimeForm = this.formBuilder.group({
      id: [''],
      code: ['', Validators.required],
      description: ['', Validators.required],
      label: ['', Validators.required],
      isCanceled: [false],
    });
  }

  loadRegimeDetails(regimeId: string): void {
    this.regimService.getRegimeById(regimeId).subscribe(regime => {
      if (regime) {
        this.regimeForm.patchValue({
          id: regime.id,
          code: regime.code,
          description: regime.description,
          label: regime.label,
          isCanceled: regime.isCanceled
        });
        this.modificationReussi = true;
      }
    });
  }

  addOrUpdateRegime(): void {
    if (this.regimeForm.valid) {
      const regimeData = this.regimeForm.value;
      if (regimeData.id) {
        this.regimService.updateRegime(regimeData).subscribe(updatedRegime => {
          this.openupdatesDialog();
          console.log('Régime mis à jour :', updatedRegime);
        }, (error) => {
          console.error('Erreur lors de la mise à jour du régime :', error);
        });
      } else {
        this.regimService.addRegime(regimeData).subscribe(addedRegime => {
          this.openSuccessDialog();
          console.log('Nouveau régime ajouté :', addedRegime);
          this.router.navigate(['/resturation', 'Diet', addedRegime.id]);
          this.regimeForm.patchValue(addedRegime);
        }, (error) => {
          console.error('Erreur lors de l\'ajout du régime :', error);
        });
      }
    }
  }

  deleteRegime(): void {
    const regimeId = this.regimeForm.get('id')?.value;
    if (regimeId) {
      this.regimService.deleteRegime(regimeId).subscribe(() => {
        console.log('Régime supprimé avec succès');
        this.router.navigate(['/resturation', 'Diet']);
      }, (error) => {
        console.error('Erreur lors de la suppression du régime :', error);
      });
    } else {
      console.error('ID du régime non défini');
    }
  }

  isFormValid(): boolean {
    return this.regimeForm.valid;
  }

  openSuccessDialog(): void {
    this.dialog.open(DialogajouterComponent, {
      width: '30%',
      height: '20%',
    });
  }

  openupdatesDialog(): void {
    this.dialog.open(DialogmodifierComponent, {
      width: '30%',
      height: '20%',
    });
  }
}
