import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  IngredientListGQL,
  CreateIngredientGQL,
  UpdateIngredientGQL,
  DeleteIngredientGQL,
  GetIngredientByIdGQL, CreateIngredientMutation, CreateIngredientDocument, IngredientListDocument,

} from '../componnent/ingredient/ingredient.generated';

import {Apollo} from "apollo-angular";


@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  constructor(
    public apollo: Apollo,
    private ingredientListGQL: IngredientListGQL,
    private createIngredientGQL: CreateIngredientGQL,
    private updateIngredientGQL: UpdateIngredientGQL,
    private deleteIngredientGQL: DeleteIngredientGQL,
    private getIngredientByIdGQL: GetIngredientByIdGQL
  ) { }

  getIngredients(): Observable<any[]> {
    return this.ingredientListGQL.watch().valueChanges.pipe(
      map(result => result.data.ingredientList)
    );
  }

  getIngredientById(id: string): Observable<any> {
    return this.getIngredientByIdGQL.watch({ id }).valueChanges.pipe(
      map(result => result.data.ingredient)
    );
  }

  addIngredient(name: string, price: number, unitPrice: string, supplier: string) {
    return this.apollo.mutate<CreateIngredientMutation>({
      mutation: CreateIngredientDocument,
      variables: { name,price,unitPrice,supplier},
      refetchQueries: [{ query: IngredientListDocument }]
    }).pipe(
      map(result => result.data?.ingredientMutation?.save),
      catchError(error => {
        console.error('Erreur lors de l\'ajout du ingredient:', error);
        return throwError(error);
      })
    );
  }



  updateIngredient(id: string, name: string, price: number, unitPrice: string, supplier: string,isCanceled:boolean): Observable<any> {
    return this.updateIngredientGQL.mutate({
      id: parseInt(id), name, price, unitPrice, supplier,isCanceled
    }).pipe(
      map(result => result.data?.ingredientMutation?.save)
    );
  }

  deleteIngredient(id: string): Observable<any> {
    return this.deleteIngredientGQL.mutate({
      id: parseInt(id)
    }).pipe(
      map(result => result.data?.ingredientMutation?.delete)
    );
  }
  cancelIngredient(ingredient: any): Observable<any> {
    return this.updateIngredientGQL.mutate({
      id: parseInt(ingredient.id),
      name: ingredient.name,
      price: ingredient.price,
      unitPrice: ingredient.unitPrice,
      supplier:ingredient.supplier,
      isCanceled: true
    },{ refetchQueries: [{ query: this.ingredientListGQL.document }] }).pipe(
      map(result => result.data?.ingredientMutation?.save),
      catchError(error => {
        console.error('Erreur lors de l\'annulation de l\'ingrédient:', error);
        return throwError(error);
      })
    );
  }
  searchIngredientsByName(nom: string): Observable<any[]> {
    return this.getIngredients().pipe(
      map(ingredients => {
        return ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(nom.toLowerCase()));
      })
    );
  }


}
