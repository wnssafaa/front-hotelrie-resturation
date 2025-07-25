import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DietListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DietListQuery = { __typename?: 'Query', dietList: Array<{ __typename?: 'DietType', id: number, code: string, description: string, label: string, isCanceled: boolean }> };

export type GetDietByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetDietByIdQuery = { __typename?: 'Query', diet: { __typename?: 'DietType', id: number, code: string, description: string, label: string, isCanceled: boolean } };

export type CreateDietMutationVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
  description: Types.Scalars['String']['input'];
  label: Types.Scalars['String']['input'];
  isCanceled?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CreateDietMutation = { __typename?: 'Mutation', dietMutation?: { __typename?: 'DietTypeMutation', save: { __typename?: 'DietType', id: number, code: string, description: string, label: string, isCanceled: boolean } } | null };

export type UpdateDietMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  code: Types.Scalars['String']['input'];
  description: Types.Scalars['String']['input'];
  label: Types.Scalars['String']['input'];
  isCanceled?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type UpdateDietMutation = { __typename?: 'Mutation', dietMutation?: { __typename?: 'DietTypeMutation', save: { __typename?: 'DietType', id: number, code: string, description: string, label: string, isCanceled: boolean } } | null };

export type DeleteDietMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteDietMutation = { __typename?: 'Mutation', dietMutation?: { __typename?: 'DietTypeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const DietListDocument = gql`
    query dietList {
  dietList {
    id
    code
    description
    label
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DietListGQL extends Apollo.Query<DietListQuery, DietListQueryVariables> {
    override document = DietListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDietByIdDocument = gql`
    query GetDietById($id: ID!) {
  diet(pk: $id) {
    id
    code
    description
    label
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDietByIdGQL extends Apollo.Query<GetDietByIdQuery, GetDietByIdQueryVariables> {
    override document = GetDietByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDietDocument = gql`
    mutation CreateDiet($code: String!, $description: String!, $label: String!, $isCanceled: Boolean) {
  dietMutation {
    save(
      data: {code: $code, description: $description, label: $label, isCanceled: $isCanceled}
    ) {
      id
      code
      description
      label
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDietGQL extends Apollo.Mutation<CreateDietMutation, CreateDietMutationVariables> {
    override document = CreateDietDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateDietDocument = gql`
    mutation UpdateDiet($id: Int!, $code: String!, $description: String!, $label: String!, $isCanceled: Boolean) {
  dietMutation {
    save(
      data: {id: $id, code: $code, description: $description, label: $label, isCanceled: $isCanceled}
    ) {
      id
      code
      description
      label
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateDietGQL extends Apollo.Mutation<UpdateDietMutation, UpdateDietMutationVariables> {
    override document = UpdateDietDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteDietDocument = gql`
    mutation DeleteDiet($id: Int!) {
  dietMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteDietGQL extends Apollo.Mutation<DeleteDietMutation, DeleteDietMutationVariables> {
    override document = DeleteDietDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
