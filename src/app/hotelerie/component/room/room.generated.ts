import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import {InputMaybe, Scalars} from "../../../../types";
export type RoomListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RoomListQuery = { __typename?: 'Query', roomList: Array<{ __typename?: 'RoomType', id: number, label: string, code: string, bedCpt: number, status: string, bedCode: string, bedStatus?: string | null, bedName: string, floor: { __typename?: 'FloorType', name: string }, ward: { __typename?: 'WardType', name: string }, roomType: { __typename?: 'RoomTypeType', type: string }, bedType: { __typename?: 'BedTypeType', label: string } }> };

export type GetRoomByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetRoomByIdQuery = { __typename?: 'Query', room: { __typename?: 'RoomType', id: number, label: string, code: string, bedCpt: number, status: string, bedCode: string, bedStatus?: string | null, bedName: string, floor: { __typename?: 'FloorType', id: number, name: string }, ward: { __typename?: 'WardType', id: number, name: string }, roomType: { __typename?: 'RoomTypeType', id: number, type: string }, bedType: { __typename?: 'BedTypeType', id: number, label: string } } };

export type CreateRoomMutationVariables = Types.Exact<{
  label: Types.Scalars['String']['input'];
  code: Types.Scalars['String']['input'];
  floorId: Types.FloorPartialInput;
  wardId: Types.WardPartialInput;
  roomTypeId: Types.RoomTypePartialInput;
  bedCpt: Types.Scalars['Int']['input'];
  status: Types.Scalars['String']['input'];
  bedCode: Types.Scalars['String']['input'];
  bedType: Types.BedTypePartialInput;
  bedName: Types.Scalars['String']['input'];
  options?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', roomMutation?: { __typename?: 'RoomTypeMutation', save: { __typename?: 'RoomType', id: number, label: string, code: string, bedCpt: number, status: string, bedCode: string, bedName: string, floor: { __typename?: 'FloorType', id: number, name: string }, ward: { __typename?: 'WardType', id: number, name: string }, roomType: { __typename?: 'RoomTypeType', id: number, type: string }, bedType: { __typename?: 'BedTypeType', id: number, label: string } } } | null };

export type UpdateRoomMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  label: Types.Scalars['String']['input'];
  code: Types.Scalars['String']['input'];
  floorId: Types.FloorPartialInput;
  wardId: Types.WardPartialInput;
  roomTypeId: Types.RoomTypePartialInput;
  bedType: Types.BedTypePartialInput;
  bedCpt: Types.Scalars['Int']['input'];
  bedCode: Types.Scalars['String']['input'];
  bedName: Types.Scalars['String']['input'];
  bedStatus?: Types.InputMaybe<Types.Scalars['String']['input']>;
  status: Types.Scalars['String']['input'];
  options?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type UpdateRoomMutation = { __typename?: 'Mutation', roomMutation?: { __typename?: 'RoomTypeMutation', save: { __typename?: 'RoomType', id: number, label: string, code: string, bedCpt: number, status: string, bedCode: string, bedName: string,  floor: { __typename?: 'FloorType', id: number, name: string }, ward: { __typename?: 'WardType', id: number, name: string }, roomType: { __typename?: 'RoomTypeType', id: number, type: string }, bedType: { __typename?: 'BedTypeType', id: number, label: string } } } | null };

export type DeleteRoomMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteRoomMutation = { __typename?: 'Mutation', roomMutation?: { __typename?: 'RoomTypeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const RoomListDocument = gql`
    query roomList {
  roomList {
    id
    label
    code
    floor {
      name
    }
    ward {
      name
    }
    roomType {
      type
    }
    bedType {
      label
    }
    bedCpt
    status
    bedCode
    bedStatus
    bedName
    options
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoomListGQL extends Apollo.Query<RoomListQuery, RoomListQueryVariables> {
    override document = RoomListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRoomByIdDocument = gql`
    query GetRoomById($id: ID!) {
  room(pk: $id) {
    id
    label
    code
    floor {
      id
      name
    }
    ward {
      id
      name
    }
    roomType {
      id
      type
    }
    bedType {
      id
      label
    }
    bedCpt
    status
    bedCode
    bedStatus
    bedName
    options

  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRoomByIdGQL extends Apollo.Query<GetRoomByIdQuery, GetRoomByIdQueryVariables> {
    override document = GetRoomByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRoomDocument = gql`
  mutation CreateRoom(
    $label: String!,
    $code: String!,
    $floorId: FloorPartialInput!,
    $wardId: WardPartialInput!,
    $roomTypeId: RoomTypePartialInput!,
    $bedCpt: Int!,
    $status: String!,
    $bedCode: String!,
    $bedType: BedTypePartialInput!,
    $bedName: String!,
    $options: JSON

  ) {
    roomMutation {
      save(data: {
        label: $label,
        code: $code,
        floor: $floorId,
        ward: $wardId,
        roomType: $roomTypeId,
        bedCpt: $bedCpt,
        status: $status,
        bedCode: $bedCode,
        bedType: $bedType,
        bedName: $bedName,
        options: $options,



      }) {
        id
        label
        code
        floor {
          id
          name
        }
        ward {
          id
          name
        }
        roomType {
          id
          type
        }
        bedCpt
        status
        bedCode
        bedType {
          id
          label
        }

        bedName
        options
      }
    }
  }



    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRoomGQL extends Apollo.Mutation<CreateRoomMutation, CreateRoomMutationVariables> {
    override document = CreateRoomDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRoomDocument = gql`

  mutation UpdateRoom($id: Int!,$label: String!, $code: String!, $floorId: FloorPartialInput!, $wardId: WardPartialInput!, $roomTypeId: RoomTypePartialInput!, $bedType: BedTypePartialInput!,$bedCpt:Int!,$bedCode: String!, $bedName: String!,$bedStatus:String,$status:String!,$options:JSON) {
    roomMutation {
      save(data: {id: $id,label: $label,code: $code,floor: $floorId,ward: $wardId,roomType: $roomTypeId,bedType: $bedType, bedCpt:$bedCpt,bedCode: $bedCode, bedName: $bedName,bedStatus:$bedStatus,status:$status, options: $options,
      }) {
        id
        label
        code
        floor {
          id
          name
        }
        ward {
          id
          name
        }
        roomType {
          id
          type
        }
        bedCpt
        status
        bedCode
        bedType {
          id
          label
        }
        bedName
        options

      }
    }
  }

`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRoomGQL extends Apollo.Mutation<UpdateRoomMutation, UpdateRoomMutationVariables> {
    override document = UpdateRoomDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteRoomDocument = gql`
    mutation DeleteRoom($id: Int!) {
  roomMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteRoomGQL extends Apollo.Mutation<DeleteRoomMutation, DeleteRoomMutationVariables> {
    override document = DeleteRoomDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
