import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DietListGQL,
  GetDietByIdGQL,
  CreateDietGQL,
  DeleteDietGQL,
  UpdateDietGQL
} from '../componnent/diet/diet.generated';

@Injectable({
  providedIn: 'root'
})
export class RegimService {

  constructor(
    public dietListGQL: DietListGQL,
    public getDietByIdGQL: GetDietByIdGQL,
    public createDietGQL: CreateDietGQL,
    public deleteDietGQL: DeleteDietGQL,
    public updateDietGQL: UpdateDietGQL,

) {}

  getRegimes(): Observable<any[]> {
    return this.dietListGQL
      .watch()
      .valueChanges.pipe(map((result: any) => result.data.dietList));
  }

  getRegimeById(id: string): Observable<any> {
    return this.getDietByIdGQL
      .watch({ id })
      .valueChanges.pipe(map((result: any) => result.data.diet));
  }

  addRegime(regime: any): Observable<any> {
    return this.createDietGQL
      .mutate({
        code: regime.code,
        description: regime.description,
        label: regime.label,
        isCanceled: regime.iscanceled
      }, { refetchQueries: [{ query: this.dietListGQL.document }] })
      .pipe(map((result: any) => result.data.dietMutation.save));
  }

  deleteRegime(id: number): Observable<any> {
    return this.deleteDietGQL
      .mutate({ id }, { refetchQueries: [{ query: this.dietListGQL.document }] })
      .pipe(map((result: any) => result.data.dietMutation.delete));
  }

  updateRegime(regime: any): Observable<any> {
    return this.updateDietGQL
      .mutate({
        id: parseInt(regime.id),
        code: regime.code,
        description: regime.description,
        label: regime.label,
        isCanceled: regime.iscanceled
      }, { refetchQueries: [{ query: this.dietListGQL.document }] })
      .pipe(map((result: any) => result.data.dietMutation.save));
  }
  searchRegimeByCode(code: string): Observable<any[]> {
    return this.getRegimes().pipe(
      map(Regimes => {
        return Regimes.filter(Regime => Regime.code.toLowerCase().includes(code.toLowerCase()));
      })
    );
  }
  cancelregime(regime: any): Observable<any> {
    return this.updateDietGQL
      .mutate({
        id: parseInt(regime.id),
        code: regime.code,
        description: regime.description,
        label: regime.label,
        isCanceled: true
      }, { refetchQueries: [{ query: this.dietListGQL.document }] })
      .pipe(map((result: any) => result.data.dietMutation.save));
  }





}
