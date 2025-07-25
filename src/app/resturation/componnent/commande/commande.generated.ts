import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type OrderListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type OrderListQuery = { __typename?: 'Query', orderList: Array<{ __typename?: 'OrderType', id: number, status: string, patient: string, date?: any | null, isCanceled: boolean, meal: Array<{ __typename?: 'MealType', label: string }> }> };

export type GetOrderByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetOrderByIdQuery = { __typename?: 'Query', order: { __typename?: 'OrderType', id: number, status: string, patient: string, date?: any | null, isCanceled: boolean, meal: Array<{ __typename?: 'MealType', id: number, label: string }> } };

export type CreateOrderMutationVariables = Types.Exact<{
  status: Types.Scalars['String']['input'];
  mealIds: Array<Types.MealPartialInput> | Types.MealPartialInput;
  patient: Types.Scalars['String']['input'];
  date: Types.Scalars['Date']['input'];
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', orderMutation?: { __typename?: 'OrderTypeMutation', save: { __typename?: 'OrderType', id: number, status: string, patient: string, date?: any | null, isCanceled: boolean, meal: Array<{ __typename?: 'MealType', id: number, label: string }> } } | null };

export type UpdateOrderMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  status: Types.Scalars['String']['input'];
  mealIds: Array<Types.MealPartialInput> | Types.MealPartialInput;
  patient: Types.Scalars['String']['input'];
  date: Types.Scalars['Date']['input'];
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', orderMutation?: { __typename?: 'OrderTypeMutation', save: { __typename?: 'OrderType', id: number, status: string, patient: string, date?: any | null, isCanceled: boolean, meal: Array<{ __typename?: 'MealType', id: number, label: string }> } } | null };

export type DeleteOrderMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', orderMutation?: { __typename?: 'OrderTypeMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export const OrderListDocument = gql`
    query orderList {
  orderList {
    id
    status
    patient
    date
    meal {
      label
    }
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderListGQL extends Apollo.Query<OrderListQuery, OrderListQueryVariables> {
    override document = OrderListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOrderByIdDocument = gql`
    query GetOrderById($id: ID!) {
  order(pk: $id) {
    id
    status
    patient
    date
    meal {
      id
      label
    }
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrderByIdGQL extends Apollo.Query<GetOrderByIdQuery, GetOrderByIdQueryVariables> {
    override document = GetOrderByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOrderDocument = gql`
    mutation CreateOrder($status: String!, $mealIds: [MealPartialInput!]!, $patient: String!, $date: Date!, $isCanceled: Boolean!) {
  orderMutation {
    save(
      data: {status: $status, meal: $mealIds, patient: $patient, date: $date, isCanceled: $isCanceled}
    ) {
      id
      status
      meal {
        id
        label
      }
      patient
      date
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrderGQL extends Apollo.Mutation<CreateOrderMutation, CreateOrderMutationVariables> {
    override document = CreateOrderDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($id: Int!, $status: String!, $mealIds: [MealPartialInput!]!, $patient: String!, $date: Date!, $isCanceled: Boolean!) {
  orderMutation {
    save(
      data: {id: $id, status: $status, meal: $mealIds, patient: $patient, date: $date, isCanceled: $isCanceled}
    ) {
      id
      status
      meal {
        id
        label
      }
      patient
      date
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOrderGQL extends Apollo.Mutation<UpdateOrderMutation, UpdateOrderMutationVariables> {
    override document = UpdateOrderDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: Int!) {
  orderMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOrderGQL extends Apollo.Mutation<DeleteOrderMutation, DeleteOrderMutationVariables> {
    override document = DeleteOrderDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
