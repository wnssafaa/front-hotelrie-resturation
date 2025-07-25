import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetFloorsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFloorsQuery = { __typename?: 'Query', floorList: Array<{ __typename?: 'FloorType', id: number, name: string, code: string, building: { __typename?: 'BuildingType', id: number } }> };

export type GetFloorByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetFloorByIdQuery = { __typename?: 'Query', floor: { __typename?: 'FloorType', id: number, name: string, code: string, description: string, building: { __typename?: 'BuildingType', id: number, name: string } } };

export type CreateFloorMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  code: Types.Scalars['String']['input'];
  buildingId: Types.BuildingPartialInput;
  description: Types.Scalars['String']['input'];
}>;


export type CreateFloorMutation = { __typename?: 'Mutation', floorMutation?: { __typename?: 'FloorTypeMutation', save: { __typename?: 'FloorType', id: number, name: string, code: string, description: string, building: { __typename?: 'BuildingType', id: number, name: string } } } | null };

export type UpdateFloorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  name: Types.Scalars['String']['input'];
  code: Types.Scalars['String']['input'];
  description: Types.Scalars['String']['input'];
  building: Types.BuildingPartialInput;
}>;


export type UpdateFloorMutation = { __typename?: 'Mutation', floorMutation?: { __typename?: 'FloorTypeMutation', save: { __typename?: 'FloorType', id: number, name: string, code: string, description: string, building: { __typename?: 'BuildingType', id: number, code: string, name: string } } } | null };

export type DeleteFloorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteFloorMutation = { __typename?: 'Mutation', floorMutation?: { __typename?: 'FloorTypeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const GetFloorsDocument = gql`
    query GetFloors {
  floorList {
    id
    name
    code
    building {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFloorsGQL extends Apollo.Query<GetFloorsQuery, GetFloorsQueryVariables> {
    override document = GetFloorsDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFloorByIdDocument = gql`
    query GetFloorById($id: ID!) {
  floor(pk: $id) {
    id
    name
    code
    description
    building {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFloorByIdGQL extends Apollo.Query<GetFloorByIdQuery, GetFloorByIdQueryVariables> {
    // @ts-ignore
    document = GetFloorByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateFloorDocument = gql`
    mutation CreateFloor($name: String!, $code: String!, $buildingId: BuildingPartialInput!, $description: String!) {
  floorMutation {
    save(
      data: {name: $name, code: $code, building: $buildingId, description: $description}
    ) {
      id
      name
      code
      building {
        id
        name
      }
      description
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateFloorGQL extends Apollo.Mutation<CreateFloorMutation, CreateFloorMutationVariables> {
    override document = CreateFloorDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateFloorDocument = gql`
    mutation UpdateFloor($id: Int!, $name: String!, $code: String!, $description: String!, $building: BuildingPartialInput!) {
  floorMutation {
    save(
      data: {id: $id, name: $name, code: $code, description: $description, building: $building}
    ) {
      id
      name
      code
      description
      building {
        id
        code
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateFloorGQL extends Apollo.Mutation<UpdateFloorMutation, UpdateFloorMutationVariables> {
    override document = UpdateFloorDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteFloorDocument = gql`
    mutation DeleteFloor($id: Int!) {
  floorMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteFloorGQL extends Apollo.Mutation<DeleteFloorMutation, DeleteFloorMutationVariables> {
    override document = DeleteFloorDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
