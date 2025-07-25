import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MealListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MealListQuery = { __typename?: 'Query', mealList: Array<{ __typename?: 'MealType', id: number, type: string, label: string, price?: number | null, calorie?: number | null, availability?: string | null, supplement?: string | null, belief?: string | null, isCanceled: boolean, diet: { __typename?: 'DietType', code: string } }> };

export type GetMealByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetMealByIdQuery = { __typename?: 'Query', meal: { __typename?: 'MealType', id: number, type: string, label: string, price?: number | null, calorie?: number | null, availability?: string | null, supplement?: string | null, belief?: string | null, isCanceled: boolean, photo: string, diet: { __typename?: 'DietType', id: number, code: string } } };

export type CreateMealMutationVariables = Types.Exact<{
  type: Types.Scalars['String']['input'];
  label: Types.Scalars['String']['input'];
  price?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  calorie?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  availability?: Types.InputMaybe<Types.Scalars['String']['input']>;
  dietId?: Types.InputMaybe<Types.DietPartialInput>;
  supplement?: Types.InputMaybe<Types.Scalars['String']['input']>;
  belief: Types.Scalars['String']['input'];
  photo?: Types.InputMaybe<Types.Scalars['String']['input']>;
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type CreateMealMutation = { __typename?: 'Mutation', mealMutation?: { __typename?: 'MealTypeMutation', save: { __typename?: 'MealType', id: number, type: string, label: string, price?: number | null, calorie?: number | null, availability?: string | null, supplement?: string | null, belief?: string | null, isCanceled: boolean, photo: string, diet: { __typename?: 'DietType', id: number, code: string } } } | null };

export type DeleteMealMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteMealMutation = { __typename?: 'Mutation', mealMutation?: { __typename?: 'MealTypeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export type UpdateMealMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  type: Types.Scalars['String']['input'];
  label: Types.Scalars['String']['input'];
  price?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  calorie?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  availability?: Types.InputMaybe<Types.Scalars['String']['input']>;
  dietId?: Types.InputMaybe<Types.DietPartialInput>;
  supplement?: Types.InputMaybe<Types.Scalars['String']['input']>;
  belief: Types.Scalars['String']['input'];
  photo?: Types.InputMaybe<Types.Scalars['String']['input']>;
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type UpdateMealMutation = { __typename?: 'Mutation', mealMutation?: { __typename?: 'MealTypeMutation', save: { __typename?: 'MealType', id: number, type: string, label: string, price?: number | null, calorie?: number | null, availability?: string | null, supplement?: string | null, belief?: string | null, isCanceled: boolean, photo: string, diet: { __typename?: 'DietType', id: number, code: string } } } | null };

export const MealListDocument = gql`
    query mealList {
  mealList {
    id
    type
    label
    price
    calorie
    availability
    diet {
      code
    }
    supplement
    belief
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MealListGQL extends Apollo.Query<MealListQuery, MealListQueryVariables> {
    override document = MealListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMealByIdDocument = gql`
    query GetMealById($id: ID!) {
  meal(pk: $id) {
    id
    type
    label
    price
    calorie
    availability
    diet {
      id
      code
    }
    supplement
    belief
    isCanceled
    photo
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMealByIdGQL extends Apollo.Query<GetMealByIdQuery, GetMealByIdQueryVariables> {
    override document = GetMealByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateMealDocument = gql`
    mutation CreateMeal($type: String!, $label: String!, $price: Float, $calorie: Int, $availability: String, $dietId: DietPartialInput, $supplement: String, $belief: String!, $photo: String, $isCanceled: Boolean!) {
  mealMutation {
    save(
      data: {type: $type, label: $label, price: $price, calorie: $calorie, availability: $availability, diet: $dietId, supplement: $supplement, belief: $belief, photo: $photo, isCanceled: $isCanceled}
    ) {
      id
      type
      label
      price
      calorie
      availability
      diet {
        id
        code
      }
      supplement
      belief
      isCanceled
      photo
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMealGQL extends Apollo.Mutation<CreateMealMutation, CreateMealMutationVariables> {
    override document = CreateMealDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteMealDocument = gql`
    mutation DeleteMeal($id: Int!) {
  mealMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMealGQL extends Apollo.Mutation<DeleteMealMutation, DeleteMealMutationVariables> {
    override document = DeleteMealDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMealDocument = gql`
    mutation UpdateMeal($id: Int!, $type: String!, $label: String!, $price: Float, $calorie: Int, $availability: String, $dietId: DietPartialInput, $supplement: String, $belief: String!, $photo: String, $isCanceled: Boolean!) {
  mealMutation {
    save(
      data: {id: $id, type: $type, label: $label, price: $price, calorie: $calorie, availability: $availability, diet: $dietId, supplement: $supplement, belief: $belief, photo: $photo, isCanceled: $isCanceled}
    ) {
      id
      type
      label
      price
      calorie
      availability
      diet {
        id
        code
      }
      supplement
      belief
      isCanceled
      photo
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMealGQL extends Apollo.Mutation<UpdateMealMutation, UpdateMealMutationVariables> {
    override document = UpdateMealDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
