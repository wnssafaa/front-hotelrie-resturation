import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  constructor() { }
  evaluations: { [commandeId: string]: any } = {};

  saveEvaluation(commandeId: string, evaluationData: any): void {
    this.evaluations[commandeId] = evaluationData;
  }

  getEvaluation(commandeId: string): any {
    return this.evaluations[commandeId];
  }
}
