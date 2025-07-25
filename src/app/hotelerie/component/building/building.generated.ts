import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BuildingListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BuildingListQuery = { __typename?: 'Query', buildingList: Array<{ __typename?: 'BuildingType', id: number, code: string, name: string }> };

export type GetBuildingByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetBuildingByIdQuery = { __typename?: 'Query', building: { __typename?: 'BuildingType', id: number, code: string, name: string } };

export type CreateBuildingMutationVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
  name: Types.Scalars['String']['input'];
}>;


export type CreateBuildingMutation = { __typename?: 'Mutation', buildingMutation?: { __typename?: 'BuildingTypeMutation', save: { __typename?: 'BuildingType', id: number, code: string, name: string } } | null };

export type UpdateBuildingMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  code: Types.Scalars['String']['input'];
  name: Types.Scalars['String']['input'];
}>;


export type UpdateBuildingMutation = { __typename?: 'Mutation', buildingMutation?: { __typename?: 'BuildingTypeMutation', save: { __typename?: 'BuildingType', id: number, code: string, name: string } } | null };

export type DeleteBuildingMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteBuildingMutation = { __typename?: 'Mutation', buildingMutation?: { __typename?: 'BuildingTypeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const BuildingListDocument = gql`
    query buildingList {
  buildingList {
    id
    code
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BuildingListGQL extends Apollo.Query<BuildingListQuery, BuildingListQueryVariables> {
    override document = BuildingListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBuildingByIdDocument = gql`
    query GetBuildingById($id: ID!) {
  building(pk: $id) {
    id
    code
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBuildingByIdGQL extends Apollo.Query<GetBuildingByIdQuery, GetBuildingByIdQueryVariables> {
    override document = GetBuildingByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateBuildingDocument = gql`
    mutation CreateBuilding($code: String!, $name: String!) {
  buildingMutation {
    save(data: {code: $code, name: $name}) {
      id
      code
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBuildingGQL extends Apollo.Mutation<CreateBuildingMutation, CreateBuildingMutationVariables> {
    override document = CreateBuildingDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateBuildingDocument = gql`
    mutation UpdateBuilding($id: Int!, $code: String!, $name: String!) {
  buildingMutation {
    save(data: {id: $id, code: $code, name: $name}) {
      id
      code
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBuildingGQL extends Apollo.Mutation<UpdateBuildingMutation, UpdateBuildingMutationVariables> {
    override document = UpdateBuildingDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteBuildingDocument = gql`
    mutation DeleteBuilding($id: Int!) {
  buildingMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteBuildingGQL extends Apollo.Mutation<DeleteBuildingMutation, DeleteBuildingMutationVariables> {
    override document = DeleteBuildingDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
