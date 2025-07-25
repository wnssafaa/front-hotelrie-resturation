import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  MealListGQL,
  GetMealByIdGQL,
  CreateMealGQL,
  DeleteMealGQL,
  UpdateMealGQL,
  MealListQuery, MealListDocument, UpdateMealMutation, UpdateMealDocument
} from '../componnent/meal/repas.generated';
import { DietListGQL } from "../componnent/diet/diet.generated";





@Injectable({
  providedIn: 'root'
})
export class RepasService {
  constructor(
    private apollo: Apollo,
    private mealListGQL: MealListGQL,
    private getMealByIdGQL: GetMealByIdGQL,
    private createMealGQL: CreateMealGQL,
    private deleteMealGQL: DeleteMealGQL,
    private updateMealGQL: UpdateMealGQL,
    private dietListGQL: DietListGQL,
  ) {}

  getRepas(): Observable<any> {
    return this.apollo.watchQuery<MealListQuery>({
      query: MealListDocument
    }).valueChanges.pipe(map((result: any) => result.data.mealList));
  }

  getRepasById(id: string): Observable<any> {
    return this.getMealByIdGQL.watch({ id }).valueChanges.pipe(
      map(result => result.data.meal)
    );
  }

  addRepas(repas: any): Observable<any> {
    const dietId = { id: parseInt(repas.dietId, 10) };
    return this.createMealGQL.mutate({
      type: repas.type,
      label: repas.label,
      price: repas.price,
      calorie: repas.calorie,
      availability: repas.availability,
      dietId: dietId,
      supplement: repas.supplement,
      belief: repas.belief,
      photo: repas.photo,
      isCanceled: repas.isCanceled
    }, {
      refetchQueries: [{ query: MealListDocument }]
    }).pipe(
      map(result => result.data?.mealMutation?.save)
    );
  }


  deleteRepas(id: string): Observable<any> {
    return this.deleteMealGQL.mutate({
      id: parseInt(id)
    }, {
      refetchQueries: [{ query: MealListDocument }]
    }).pipe(
      map(result => result.data?.mealMutation?.delete)
    );
  }


  updateRepas(repas: any): Observable<any> {
    const dietId = { id: parseInt(repas.dietId, 10)};

    return this.apollo.mutate<UpdateMealMutation>({
      mutation: UpdateMealDocument,
      variables: {
        id: repas.id,
        type: repas.type,
        label: repas.label,
        price: repas.price,
        calorie: repas.calorie,
        availability: repas.availability,
        dietId: dietId,
        supplement: repas.supplement,
        belief: repas.belief,
        photo: repas.photo,
        isCanceled: repas.isCanceled
      },
      refetchQueries: [{ query: MealListDocument }]
    }).pipe(map((result: any) => result.data.mealMutation.save));
  }
  getRegimes(): Observable<any[]> {
    return this.dietListGQL
      .watch()
      .valueChanges.pipe(map((result: any) => result.data.dietList));
  }
  cancelRepas(repas: any): Observable<any> {
    const dietId = repas.dietId ? {
      code: repas.dietId.code,
      description: repas.dietId.description,
      label: repas.dietId.label
    } : null;

    const variables: any = {
      id: parseInt(repas.id),
      type: repas.type,
      label: repas.label,
      price: repas.price,
      calorie: repas.calorie,
      availability: repas.availability,
      supplement: repas.supplement,
      belief: repas.belief,
      photo: repas.photo,
      isCanceled: true
    };


    if (dietId) {
      variables.dietId = dietId;
    }

    return this.updateMealGQL.mutate({
      ...variables
    }, {
      refetchQueries: [{ query: MealListDocument }]
    }).pipe(
      map(result => result.data?.mealMutation?.save)
    );
  }




  searchMealByLabel(label: string): Observable<any[]> {
    return this.getRepas().pipe(
      map(Meals => {
        return Meals.filter((Meal :any)=> Meal.label.toLowerCase().includes(label.toLowerCase()));
      })
    );
  }

}
