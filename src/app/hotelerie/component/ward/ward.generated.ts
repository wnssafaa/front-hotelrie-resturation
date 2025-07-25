import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type WardListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type WardListQuery = { __typename?: 'Query', wardList: Array<{ __typename?: 'WardType', id: number, code: string, name: string, isPrivate: boolean, description: string }> };

export type GetWardByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetWardByIdQuery = { __typename?: 'Query', ward: { __typename?: 'WardType', id: number, code: string, name: string, isPrivate: boolean, description: string } };

export type CreateWardMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  code: Types.Scalars['String']['input'];
  isPrivate: Types.Scalars['Boolean']['input'];
  description: Types.Scalars['String']['input'];
}>;


export type CreateWardMutation = { __typename?: 'Mutation', wardMutation?: { __typename?: 'WardTypeMutation', save: { __typename?: 'WardType', id: number, name: string, code: string, isPrivate: boolean, description: string } } | null };

export type UpdateWardMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  name: Types.Scalars['String']['input'];
  code: Types.Scalars['String']['input'];
  isPrivate?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  description: Types.Scalars['String']['input'];
}>;


export type UpdateWardMutation = { __typename?: 'Mutation', wardMutation?: { __typename?: 'WardTypeMutation', save: { __typename?: 'WardType', id: number, name: string, code: string, isPrivate: boolean, description: string } } | null };

export type DeleteWardMutationVariables = Types.Exact<{
  pk: Types.Scalars['Int']['input'];
}>;


export type DeleteWardMutation = { __typename?: 'Mutation', wardMutation?: { __typename?: 'WardTypeMutation', erase: { __typename?: 'MutationSuccessType', success: boolean, error?: string | null } } | null };

export const WardListDocument = gql`
    query wardList {
  wardList {
    id
    code
    name
    isPrivate
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WardListGQL extends Apollo.Query<WardListQuery, WardListQueryVariables> {
    override document = WardListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetWardByIdDocument = gql`
    query GetWardById($id: ID!) {
  ward(pk: $id) {
    id
    code
    name
    isPrivate
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWardByIdGQL extends Apollo.Query<GetWardByIdQuery, GetWardByIdQueryVariables> {
    override document = GetWardByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateWardDocument = gql`
    mutation CreateWard($name: String!, $code: String!, $isPrivate: Boolean!, $description: String!) {
  wardMutation {
    save(
      data: {name: $name, code: $code, isPrivate: $isPrivate, description: $description}
    ) {
      id
      name
      code
      isPrivate
      description
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateWardGQL extends Apollo.Mutation<CreateWardMutation, CreateWardMutationVariables> {
    override document = CreateWardDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateWardDocument = gql`
    mutation UpdateWard($id: Int!, $name: String!, $code: String!, $isPrivate: Boolean, $description: String!) {
  wardMutation {
    save(
      data: {id: $id, name: $name, code: $code, isPrivate: $isPrivate, description: $description}
    ) {
      id
      name
      code
      isPrivate
      description
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateWardGQL extends Apollo.Mutation<UpdateWardMutation, UpdateWardMutationVariables> {
    override document = UpdateWardDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteWardDocument = gql`
    mutation DeleteWard($pk: Int!) {
  wardMutation {
    erase(pk: $pk) {
      success
      error
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteWardGQL extends Apollo.Mutation<DeleteWardMutation, DeleteWardMutationVariables> {
    override document = DeleteWardDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
