import { Component } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {EvaluationService} from "../../services/evaluation.service";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.sass'
})
export class EvaluationComponent {
  commandeId!: string;

  evaluationData: any = {
    breakfastNoAppetite: false,
    breakfastSlightLoss: false,
    breakfastModerate: false,
    breakfastGood: false,
    lunchNoAppetite: false,
    lunchSlightLoss: false,
    lunchModerate: false,
    lunchGood: false,
    dinnerNoAppetite: false,
    dinnerSlightLoss: false,
    dinnerModerate: false,
    dinnerGood: false,
    comment: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private evaluationService: EvaluationService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.commandeId = params['id'];
      this.loadEvaluation();
    });
  }

  enregistrer(): void {
    this.evaluationService.saveEvaluation(this.commandeId, this.evaluationData);
  }

  loadEvaluation(): void {
    const storedEvaluation = this.evaluationService.getEvaluation(this.commandeId);
    if (storedEvaluation) {
      this.evaluationData = storedEvaluation;
    }
  }

  imprimer(): void {
    window.print();
  }

}
