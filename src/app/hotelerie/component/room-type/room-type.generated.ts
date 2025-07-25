import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RoomTypeListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RoomTypeListQuery = { __typename?: 'Query', roomTypeList: Array<{ __typename?: 'RoomTypeType', id: number, type: string }> };

export type GetRoomTypeByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetRoomTypeByIdQuery = { __typename?: 'Query', roomType: { __typename?: 'RoomTypeType', id: number, type: string } };

export type CreateRoomTypeMutationVariables = Types.Exact<{
  type: Types.Scalars['String']['input'];
}>;


export type CreateRoomTypeMutation = { __typename?: 'Mutation', roomTypeMutation?: { __typename?: 'RoomTypeTypemutation', save: { __typename?: 'RoomTypeType', id: number, type: string } } | null };

export type UpdateRoomTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  type: Types.Scalars['String']['input'];
}>;


export type UpdateRoomTypeMutation = { __typename?: 'Mutation', roomTypeMutation?: { __typename?: 'RoomTypeTypemutation', save: { __typename?: 'RoomTypeType', id: number, type: string } } | null };

export type DeleteRoomTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteRoomTypeMutation = { __typename?: 'Mutation', roomTypeMutation?: { __typename?: 'RoomTypeTypemutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const RoomTypeListDocument = gql`
    query roomTypeList {
  roomTypeList {
    id
    type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeListGQL extends Apollo.Query<RoomTypeListQuery, RoomTypeListQueryVariables> {
    override document = RoomTypeListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRoomTypeByIdDocument = gql`
    query GetRoomTypeById($id: ID!) {
  roomType(pk: $id) {
    id
    type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRoomTypeByIdGQL extends Apollo.Query<GetRoomTypeByIdQuery, GetRoomTypeByIdQueryVariables> {
    override document = GetRoomTypeByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRoomTypeDocument = gql`
    mutation CreateRoomType($type: String!) {
  roomTypeMutation {
    save(data: {type: $type}) {
      id
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRoomTypeGQL extends Apollo.Mutation<CreateRoomTypeMutation, CreateRoomTypeMutationVariables> {
    override document = CreateRoomTypeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRoomTypeDocument = gql`
    mutation UpdateRoomType($id: Int!, $type: String!) {
  roomTypeMutation {
    save(data: {id: $id, type: $type}) {
      id
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRoomTypeGQL extends Apollo.Mutation<UpdateRoomTypeMutation, UpdateRoomTypeMutationVariables> {
    override document = UpdateRoomTypeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteRoomTypeDocument = gql`
    mutation DeleteRoomType($id: Int!) {
  roomTypeMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteRoomTypeGQL extends Apollo.Mutation<DeleteRoomTypeMutation, DeleteRoomTypeMutationVariables> {
    // @ts-ignore
    document = DeleteRoomTypeDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
