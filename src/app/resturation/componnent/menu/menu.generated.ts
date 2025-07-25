import * as Types from '../../../../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MenuListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MenuListQuery = { __typename?: 'Query', menuList: Array<{ __typename?: 'MenuType', id: number, title: string, meal: Array<{ __typename?: 'MealType', id: number, type: string }> }> };

export type GetMenuByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetMenuByIdQuery = { __typename?: 'Query', menu: { __typename?: 'MenuType', id: number, title: string, meal: Array<{ __typename?: 'MealType', id: number, type: string }> } };

export type CreateMenuMutationVariables = Types.Exact<{
  title: Types.Scalars['String']['input'];
  mealIds: Array<Types.MealPartialInput> | Types.MealPartialInput;
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type CreateMenuMutation = { __typename?: 'Mutation', menuMutation?: { __typename?: 'MenuMutation', save: { __typename?: 'MenuType', id: number, title: string, isCanceled: boolean, meal: Array<{ __typename?: 'MealType', id: number, type: string }> } } | null };

export type DeleteMenuMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DeleteMenuMutation = { __typename?: 'Mutation', menuMutation?: { __typename?: 'MenuMutation', delete: { __typename?: 'MutationSuccessType', success: boolean } } | null };

export type UpdateMenuMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  title: Types.Scalars['String']['input'];
  mealIds: Array<Types.MealPartialInput> | Types.MealPartialInput;
  isCanceled: Types.Scalars['Boolean']['input'];
}>;


export type UpdateMenuMutation = { __typename?: 'Mutation', menuMutation?: { __typename?: 'MenuMutation', save: { __typename?: 'MenuType', id: number, title: string, isCanceled: boolean, meal: Array<{ __typename?: 'MealType', type: string }> } } | null };

export const MenuListDocument = gql`
    query menuList {
  menuList {
    id
    title
    meal {
      id
      type
    }
    isCanceled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MenuListGQL extends Apollo.Query<MenuListQuery, MenuListQueryVariables> {
    override document = MenuListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMenuByIdDocument = gql`
    query GetMenuById($id: ID!) {
  menu(pk: $id) {
    id
    title
    meal {
      id
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMenuByIdGQL extends Apollo.Query<GetMenuByIdQuery, GetMenuByIdQueryVariables> {
    override document = GetMenuByIdDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateMenuDocument = gql`
    mutation CreateMenu($title: String!, $mealIds: [MealPartialInput!]!, $isCanceled: Boolean!) {
  menuMutation {
    save(data: {title: $title, meal: $mealIds, isCanceled: $isCanceled}) {
      id
      title
      meal {
        id
        type
      }
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMenuGQL extends Apollo.Mutation<CreateMenuMutation, CreateMenuMutationVariables> {
    override document = CreateMenuDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteMenuDocument = gql`
    mutation DeleteMenu($id: Int!) {
  menuMutation {
    delete(pk: $id) {
      success
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMenuGQL extends Apollo.Mutation<DeleteMenuMutation, DeleteMenuMutationVariables> {
    override document = DeleteMenuDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMenuDocument = gql`
    mutation UpdateMenu($id: Int!, $title: String!, $mealIds: [MealPartialInput!]!, $isCanceled: Boolean) {
  menuMutation {
    save(data: {id: $id, title: $title, meal: $mealIds, isCanceled: $isCanceled}) {
      id
      title
      meal {
        type
      }
      isCanceled
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMenuGQL extends Apollo.Mutation<UpdateMenuMutation, UpdateMenuMutationVariables> {
    override document = UpdateMenuDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
