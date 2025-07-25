import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type IngredientListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IngredientListQuery = { __typename?: 'Query', ingredientList: Array<{ __typename?: 'IngredientType', id: number, name: string, price: number, unitPrice: string, supplier: string, isCanceled: boolean }> };

export type CreateIngredientMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  price: Types.Scalars['Int']['input'];
  unitPrice: Types.Scalars['String']['input'];
  supplier: Types.Scalars['String']['input'];
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type CreateIngredientMutation = { __typename?: 'Mutation', ingredientMutation?: { __typename?: 'IngredientMutation', save: { __typename?: 'IngredientType', id: number, name: string, price: number, unitPrice: string, supplier: string, isCanceled: boolean } } | null };

export type UpdateIngredientMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  name: Types.Scalars['String']['input'];
  price: Types.Scalars['Int']['input'];
  unitPrice: Types.Scalars['String']['input'];
  supplier: Types.Scalars['String']['input'];
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type UpdateIngredientMutation = { __typename?: 'Mutation', ingredientMutation?: { __typename?: 'IngredientMutation', save: { __typename?: 'IngredientType', id: number, name: string, price: number, unitPrice: string, supplier: string, isCanceled: boolean } } | null };

export type DeleteIngredientMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteIngredientMutation = { __typename?: 'Mutation', ingredientMutation?: { __typename?: 'IngredientMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export type GetIngredientByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetIngredientByIdQuery = { __typename?: 'Query', ingredient: { __typename?: 'IngredientType', id: number, name: string, price: number, unitPrice: string, supplier: string, isCanceled: boolean } };

export const IngredientListDocument = gql`
    query ingredientList {
  ingredientList {
    id
    name
    price
    unitPrice
    supplier
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class IngredientListGQL extends Apollo.Query<IngredientListQuery, IngredientListQueryVariables> {
    override document = IngredientListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateIngredientDocument = gql`
    mutation CreateIngredient($name: String!, $price: Int!, $unitPrice: String!, $supplier: String!, $isCanceled: Boolean) {
  ingredientMutation {
    save(
      data: {name: $name, price: $price, unitPrice: $unitPrice, supplier: $supplier, isCanceled: $isCanceled}
    ) {
      id
      name
      price
      unitPrice
      supplier
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateIngredientGQL extends Apollo.Mutation<CreateIngredientMutation, CreateIngredientMutationVariables> {
    override document = CreateIngredientDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateIngredientDocument = gql`
    mutation UpdateIngredient($id: Int!, $name: String!, $price: Int!, $unitPrice: String!, $supplier: String!, $isCanceled: Boolean) {
  ingredientMutation {
    save(
      data: {id: $id, name: $name, price: $price, unitPrice: $unitPrice, supplier: $supplier, isCanceled: $isCanceled}
    ) {
      id
      name
      price
      unitPrice
      supplier
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateIngredientGQL extends Apollo.Mutation<UpdateIngredientMutation, UpdateIngredientMutationVariables> {
    override document = UpdateIngredientDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteIngredientDocument = gql`
    mutation DeleteIngredient($id: Int!) {
  ingredientMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteIngredientGQL extends Apollo.Mutation<DeleteIngredientMutation, DeleteIngredientMutationVariables> {
    override document = DeleteIngredientDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetIngredientByIdDocument = gql`
    query GetIngredientById($id: ID!) {
  ingredient(pk: $id) {
    id
    name
    price
    unitPrice
    supplier
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetIngredientByIdGQL extends Apollo.Query<GetIngredientByIdQuery, GetIngredientByIdQueryVariables> {
    override document = GetIngredientByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
