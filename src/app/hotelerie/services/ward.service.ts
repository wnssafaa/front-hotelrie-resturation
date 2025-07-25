import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {
  CreateWardDocument,
  CreateWardMutation,
  GetWardByIdQuery,
  GetWardByIdDocument,
  UpdateWardDocument, UpdateWardMutation, WardListDocument, WardListQuery, DeleteWardMutation, DeleteWardDocument
} from "../component/ward/ward.generated";
import {map} from "rxjs/operators";
import {Apollo} from "apollo-angular";


@Injectable({
  providedIn: 'root'
})
export class WardService {
  constructor(public apollo: Apollo) { }

  getAllWards(): Observable<any> {
    return this.apollo.watchQuery<WardListQuery>({
      query: WardListDocument
    }).valueChanges.pipe(
      map(result => result.data.wardList),
      catchError(error => {
        console.error('Erreur lors de la récupération des pavillons:', error);
        return throwError(error);
      })
    );
  }

  addWard(name: string, code: string, description: string, isPrivate: boolean): Observable<any> {
    return this.apollo.mutate<CreateWardMutation>({
      mutation: CreateWardDocument,
      variables: { name, code, description, isPrivate },
      refetchQueries: [{ query: WardListDocument }]
    }).pipe(
      map(result => result.data?.wardMutation?.save),
      catchError(error => {
        console.error('Erreur lors de l\'ajout du pavillon:', error);
        return throwError(error);
      })
    );
  }

  updateWard(id: number, name: string, code: string, description: string, isPrivate: boolean): Observable<any> {
    return this.apollo.mutate<UpdateWardMutation>({
      mutation: UpdateWardDocument,
      variables: { id, name, code, description, isPrivate },
      refetchQueries: [{ query: WardListDocument }]
    }).pipe(
      map(result => result.data?.wardMutation?.save),
      catchError(error => {
        console.error('Erreur lors de la mise à jour du pavillon:', error);
        return throwError(error);
      })
    );
  }

  deleteWard(id: number): Observable<any> {
    return this.apollo.mutate<DeleteWardMutation>({
      mutation: DeleteWardDocument,
      variables: { pk: id },
      refetchQueries: [{ query: WardListDocument }]
    }).pipe(
      map(result => result.data?.wardMutation?.erase),
      catchError(error => {
        console.error('Erreur lors de la suppression du pavillon:', error);
        return throwError(error);
      })
    );
  }

  getWardById(id: string): Observable<any> {
    return this.apollo.watchQuery<GetWardByIdQuery>({
      query: GetWardByIdDocument,
      variables: { id }
    }).valueChanges.pipe(
      map(result => result.data.ward),
      catchError(error => {
        console.error('Erreur lors de la récupération du pavillon:', error);
        return throwError(error);
      })
    );
  }
  searchWardByName(name: string): Observable<any[]> {
    return this.getAllWards().pipe(
      map(Wards => {
        return Wards.filter((Ward :any)=> Ward.name.toLowerCase().includes(name.toLowerCase()));
      })
    );
  }
  
}
