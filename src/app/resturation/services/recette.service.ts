import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CreateRecipeDocument,
  CreateRecipeMutation,
  DeleteRecipeMutation,
  DeleteRecipeDocument,
  UpdateRecipeDocument,
  UpdateRecipeMutation,
  RecipeListDocument,
  RecipeListQuery, GetRecipeByIdDocument, GetRecipeByIdQuery,

} from '../componnent/recipe/recette.generated';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private apollo: Apollo) {}

  getRecettes(): Observable<any[]> {
    return this.apollo
      .watchQuery<RecipeListQuery>({
        query: RecipeListDocument
      })
      .valueChanges.pipe(map((result) => result.data.recipeList));
  }
  getRecetteById(id: string): Observable<any> {
    return this.apollo
      .watchQuery<GetRecipeByIdQuery>({
        query: GetRecipeByIdDocument,
        variables: { id }
      })
      .valueChanges.pipe(map((result) => result.data.recipe));
  }
  addRecette(recette: any): Observable<any> {
    console.log('Recette to add:', recette);

    const ingredientRecipes = recette.IngredientRecipe.map((ingredientRecipe: any) => ({
      quantity: ingredientRecipe.quantity,
      ingredient: {
        id: parseInt(ingredientRecipe.ingredient.id, 10),
        name: ingredientRecipe.ingredient.name || 'default name',
        price: ingredientRecipe.ingredient.price || 0,
        unitPrice: ingredientRecipe.ingredient.unitPrice || 'unitPrice',
        supplier: ingredientRecipe.ingredient.supplier || 'default supplier'
      },
      unit: ingredientRecipe.unit
    }));


    const sousRecipes = recette.SousRecipe.map((sousRecipe: any) => ({
      name: sousRecipe.name,
      productionValue: sousRecipe.productionValue,
      unitProductionValue: sousRecipe.unitProductionValue,
    }));

    return this.apollo
      .mutate<CreateRecipeMutation>({
        mutation: CreateRecipeDocument,
        variables: {
          name: recette.name,
          category: recette.Category,
          productionValue: recette.ProductionValue,
          unitProductionValue: recette.unitProductionValue,
          isCanceled: recette.isCanceled,
          ingredientRecipes: ingredientRecipes ,
          sousRecipes: sousRecipes
        },
        refetchQueries: [{ query: RecipeListDocument }]
      })
      .pipe(map((result) => result.data?.recipeMutation?.save));
  }
  updateRecette(recette: any): Observable<any> {
    return this.apollo
      .mutate<UpdateRecipeMutation>({
        mutation: UpdateRecipeDocument,
        variables: {
          id: recette.id,
          name: recette.name,
          category: recette.Category,
          productionValue: recette.ProductionValue ,
          unitProductionValue: recette.unitProductionValue ,
          isCanceled: recette.isCanceled,
          ingredientRecipes: recette.ingredientRecipes ,
          sousRecipes: recette.sousRecipes,
        },
        refetchQueries: [{ query: RecipeListDocument }]
      })
      .pipe(map((result) => result.data?.recipeMutation?.save));
  }

  deleteRecette(id: string): Observable<any> {
    return this.apollo
      .mutate<DeleteRecipeMutation>({
        mutation: DeleteRecipeDocument,
        variables: { id },
        refetchQueries: [{ query: RecipeListDocument }]
      })
      .pipe(map((result) => result.data?.recipeMutation?.delete));
  }
  cancelRecette(recette: any): Observable<any> {
    return this.apollo
      .mutate<UpdateRecipeMutation>({
        mutation: UpdateRecipeDocument,
        variables: {
          id: recette.id,
          name: recette.name,
          category: recette.Category,
          productionValue: recette.ProductionValue ,
          unitProductionValue: recette.unitProductionValue ,
          isCanceled: true
        },
        refetchQueries: [{ query: RecipeListDocument }]
      })
      .pipe(map((result) => result.data?.recipeMutation?.save));
  }
  searchRecipesByName(name: string): Observable<any[]> {
    return this.getRecettes().pipe(
      map(Recipes => {
        return Recipes.filter(Recipe => Recipe.name.toLowerCase().includes(name.toLowerCase()));
      })
    );
  }


}
