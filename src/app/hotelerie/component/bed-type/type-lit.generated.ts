import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BedTypeListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BedTypeListQuery = { __typename?: 'Query', bedTypeList: Array<{ __typename?: 'BedTypeType', id: number, label: string }> };

export type GetBedTypeByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetBedTypeByIdQuery = { __typename?: 'Query', bedType: { __typename?: 'BedTypeType', id: number, label: string } };

export type CreateBedTypeMutationVariables = Types.Exact<{
  label: Types.Scalars['String']['input'];
}>;


export type CreateBedTypeMutation = { __typename?: 'Mutation', bedTypeMutation?: { __typename?: 'BedTypeTypeMutation', save: { __typename?: 'BedTypeType', id: number, label: string } } | null };

export type UpdateBedTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  label: Types.Scalars['String']['input'];
}>;


export type UpdateBedTypeMutation = { __typename?: 'Mutation', bedTypeMutation?: { __typename?: 'BedTypeTypeMutation', save: { __typename?: 'BedTypeType', id: number, label: string } } | null };

export type DeleteBedTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteBedTypeMutation = { __typename?: 'Mutation', bedTypeMutation?: { __typename?: 'BedTypeTypeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const BedTypeListDocument = gql`
    query bedTypeList {
  bedTypeList {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BedTypeListGQL extends Apollo.Query<BedTypeListQuery, BedTypeListQueryVariables> {
    override document = BedTypeListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBedTypeByIdDocument = gql`
    query GetBedTypeById($id: ID!) {
  bedType(pk: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBedTypeByIdGQL extends Apollo.Query<GetBedTypeByIdQuery, GetBedTypeByIdQueryVariables> {
    override document = GetBedTypeByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateBedTypeDocument = gql`
    mutation CreateBedType($label: String!) {
  bedTypeMutation {
    save(data: {label: $label}) {
      id
      label
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBedTypeGQL extends Apollo.Mutation<CreateBedTypeMutation, CreateBedTypeMutationVariables> {
    override document = CreateBedTypeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateBedTypeDocument = gql`
    mutation UpdateBedType($id: Int!, $label: String!) {
  bedTypeMutation {
    save(data: {id: $id, label: $label}) {
      id
      label
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBedTypeGQL extends Apollo.Mutation<UpdateBedTypeMutation, UpdateBedTypeMutationVariables> {
    override document = UpdateBedTypeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteBedTypeDocument = gql`
    mutation DeleteBedType($id: Int!) {
  bedTypeMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteBedTypeGQL extends Apollo.Mutation<DeleteBedTypeMutation, DeleteBedTypeMutationVariables> {
    override document = DeleteBedTypeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
