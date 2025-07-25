import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CreateMenuMutation,
  DeleteMenuMutation,
  UpdateMenuMutation,
  MenuListQuery,
  GetMenuByIdQuery,
  CreateMenuDocument,
  DeleteMenuDocument,
  UpdateMenuDocument,
  MenuListDocument,
  GetMenuByIdDocument,
} from '../componnent/menu/menu.generated';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private apollo: Apollo) { }

  addMenu(menu: any): Observable<any> {
    return this.apollo.mutate<CreateMenuMutation>({
      mutation: CreateMenuDocument,
      variables: {
        title: menu.title,
        mealIds: menu.mealIds.map((meal: any) => ({
          id: meal.id,
          type: meal.type,
          label: meal.label
        })),
        isCanceled: menu.isCanceled
      },
      refetchQueries: [{ query: MenuListDocument }]
    }).pipe(
      map((result: any) => result.data.menuMutation.save)
    );
  }

  deleteMenu(id: string): Observable<any> {
    return this.apollo.mutate<DeleteMenuMutation>({
      mutation: DeleteMenuDocument,
      variables: {
        id: parseInt(id, 10)
      },
      refetchQueries: [{ query: MenuListDocument }]
    }).pipe(map((result: any) => result.data.menuMutation.delete));
  }

  updateMenu(menu: any): Observable<any> {
    return this.apollo.mutate<UpdateMenuMutation>({
      mutation: UpdateMenuDocument,
      variables: {
        id: menu.id,
        title: menu.title,
        mealIds: menu.mealIds.map((meal: any) => ({ id: meal.id })),
        isCanceled: menu.isCanceled
      },
      refetchQueries: [{ query: MenuListDocument }]
    }).pipe(map((result: any) => result.data.menuMutation.save));
  }

  getMenus(): Observable<any> {
    return this.apollo.watchQuery<MenuListQuery>({
      query: MenuListDocument
    }).valueChanges.pipe(map((result: any) => result.data.menuList));
  }


  getMenuById(id: string): Observable<any> {
    return this.apollo.watchQuery<GetMenuByIdQuery>({
      query: GetMenuByIdDocument,
      variables: { id }
    }).valueChanges.pipe(map((result: any) => result.data.menu));
  }
  cancelMenu(menu: any): Observable<any> {

    const mealIds = menu.mealIds && menu.mealIds.length > 0
      ? menu.mealIds.map((meal: any) => ({
        id: meal.id,
        type: meal.type,
        label: meal.label
      }))
      : [];


    const variables: any = {
      id: parseInt(menu.id, 10),
      title: menu.title,
      isCanceled: true,
      mealIds: mealIds
    };

    return this.updateMenu(variables);
  }

  searchMenusByTitre(title: string): Observable<any[]> {
    return this.getMenus().pipe(
      map(Menus => {
        return Menus.filter((Menu :any)=> Menu.title.toLowerCase().includes(title.toLowerCase()));
      })
    );
  }

}
