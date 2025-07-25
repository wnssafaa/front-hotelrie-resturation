import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RecipeListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RecipeListQuery = { __typename?: 'Query', recipeList: Array<{ __typename?: 'RecipeType', id: number, name: string, Category: string, ProductionValue?: number | null, unitProductionValue?: string | null, isCanceled: boolean, ingredientRecipes?: Array<{ __typename?: 'IngredientRecipeType', quantity: number, unit: string, ingredient: { __typename?: 'IngredientType', id: number, name: string } }> | null, sousRecipes?: Array<{ __typename?: 'SousRecipeType', name: string, productionValue?: number | null, uniteProductionValue?: string | null }> | null }> };

export type GetRecipeByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetRecipeByIdQuery = { __typename?: 'Query', recipe: { __typename?: 'RecipeType', id: number, name: string, Category: string, ProductionValue?: number | null, unitProductionValue?: string | null, isCanceled: boolean, ingredientRecipes?: Array<{ __typename?: 'IngredientRecipeType', quantity: number, unit: string, ingredient: { __typename?: 'IngredientType', id: number, name: string } }> | null, sousRecipes?: Array<{ __typename?: 'SousRecipeType', name: string, productionValue?: number | null, uniteProductionValue?: string | null }> | null } };

export type CreateRecipeMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  Category?: Types.Scalars['String']['input'];
  ProductionValue?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  unitProductionValue?: Types.InputMaybe<Types.Scalars['String']['input']>;
  isCanceled?: Types.Scalars['Boolean']['input'];
  ingredientRecipes?: Types.InputMaybe<Array<Types.IngredientRecipePartialInput> | Types.IngredientRecipePartialInput>;
  sousRecipes?: Types.InputMaybe<Array<Types.SousRecipePartialInput> | Types.SousRecipePartialInput>;
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', recipeMutation?: { __typename?: 'RecipeMutation', save: { __typename?: 'RecipeType', id: number, name: string, Category?: string | null, ProductionValue?: number | null, unitProductionValue?: string | null, isCanceled: boolean, ingredientRecipes?: Array<{ __typename?: 'IngredientRecipeType', quantity: number, unit: string, ingredient: { __typename?: 'IngredientType', id: number, name: string }|null }> | null, sousRecipes?: Array<{ __typename?: 'SousRecipeType', name: string, productionValue?: number | null, uniteProductionValue?: string | null }> | null } } | null };

export type UpdateRecipeMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  name: Types.Scalars['String']['input'];
  Category?: Types.Scalars['String']['input'];
  ProductionValue?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  uniteProductionValue?: Types.InputMaybe<Types.Scalars['String']['input']>;
  isCanceled: Types.Scalars['Boolean']['input'];
  ingredientRecipes?: Types.InputMaybe<Array<Types.IngredientRecipePartialInput> | Types.IngredientRecipePartialInput>;
  sousRecipes?: Types.InputMaybe<Array<Types.SousRecipePartialInput> | Types.SousRecipePartialInput>;
}>;


export type UpdateRecipeMutation = { __typename?: 'Mutation', recipeMutation?: { __typename?: 'RecipeMutation', save: { __typename?: 'RecipeType', id: number, name: string,  Category?: string | null, ProductionValue?: number | null, unitProductionValue?: string | null, isCanceled: boolean, ingredientRecipes?: Array<{ __typename?: 'IngredientRecipeType', quantity: number, unit: string, ingredient: { __typename?: 'IngredientType', id: number, name: string }|null }> | null, sousRecipes?: Array<{ __typename?: 'SousRecipeType', name: string, productionValue?: number | null, uniteProductionValue?: string | null }> | null } } | null };

export type DeleteRecipeMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteRecipeMutation = { __typename?: 'Mutation', recipeMutation?: { __typename?: 'RecipeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const RecipeListDocument = gql`
    query recipeList {
  recipeList {
    id
    name
    Category
    ProductionValue
    uniteProductionValue
    isCanceled
    ingredientRecipes {
      quantity
      unit
      ingredient {
        id
        name
      }
    }
    sousRecipes {
      name
      productionValue
      unitProductionValue
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RecipeListGQL extends Apollo.Query<RecipeListQuery, RecipeListQueryVariables> {
    override document = RecipeListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRecipeByIdDocument = gql`
    query GetRecipeById($id: ID!) {
  recipe(pk: $id) {
    id
    name
    Category
    ProductionValue
    uniteProductionValue
    isCanceled
    ingredientRecipes {
      quantity
      unit
      ingredient {
        id
        name
      }
    }
    sousRecipes {
      name
      productionValue
      unitProductionValue
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRecipeByIdGQL extends Apollo.Query<GetRecipeByIdQuery, GetRecipeByIdQueryVariables> {
    override document = GetRecipeByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRecipeDocument = gql`
    mutation CreateRecipe($name: String!, $category: String, $productionValue: Float!, $unitProductionValue: String!, $isCanceled: Boolean!, $ingredientRecipes: [IngredientRecipePartialInput!], $sousRecipes: [SousRecipePartialInput!]) {
  recipeMutation {
    save(
      data: {name: $name, Category: $category, ProductionValue: $productionValue, uniteProductionValue: $unitProductionValue, isCanceled: $isCanceled, ingredientRecipes: $ingredientRecipes, sousRecipes: $sousRecipes}
    ) {
      id
      name
      Category
      ProductionValue
      uniteProductionValue
      isCanceled
      ingredientRecipes {
        quantity
        unit
        ingredient {
          id
          name
        }
      }
      sousRecipes {
        name
        productionValue
        unitProductionValue
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRecipeGQL extends Apollo.Mutation<CreateRecipeMutation, CreateRecipeMutationVariables> {
    override document = CreateRecipeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRecipeDocument = gql`
    mutation UpdateRecipe($id: Int!, $name: String!, $category: String, $productionValue: Float!, $unitProductionValue: String, $isCanceled: Boolean!, $ingredientRecipes: [IngredientRecipePartialInput!], $sousRecipes: [SousRecipePartialInput!]) {
  recipeMutation {
    save(
      data: {id: $id, name: $name, Category: $category, ProductionValue: $productionValue, uniteProductionValue: $unitProductionValue, isCanceled: $isCanceled, ingredientRecipes: $ingredientRecipes, sousRecipes: $sousRecipes}
    ) {
      id
      name
      Category
      ProductionValue
      uniteProductionValue
      isCanceled
      ingredientRecipes {
        quantity
        unit
        ingredient {
          id
          name
        }
      }
      sousRecipes {
        name
        productionValue
        unitProductionValue
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRecipeGQL extends Apollo.Mutation<UpdateRecipeMutation, UpdateRecipeMutationVariables> {
    override document = UpdateRecipeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteRecipeDocument = gql`
    mutation DeleteRecipe($id: Int!) {
  recipeMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteRecipeGQL extends Apollo.Mutation<DeleteRecipeMutation, DeleteRecipeMutationVariables> {
    override document = DeleteRecipeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
