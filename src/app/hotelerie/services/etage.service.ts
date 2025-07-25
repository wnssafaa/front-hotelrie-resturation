import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map } from 'rxjs/operators';
import {combineLatest, Observable, of, throwError} from 'rxjs';
import {
  GetFloorByIdQuery,
  GetFloorsQuery,
  GetFloorByIdDocument,
  DeleteFloorDocument,
  DeleteFloorMutation,
  UpdateFloorDocument,UpdateFloorMutation,CreateFloorDocument,CreateFloorMutation,GetFloorsDocument
} from '../component/floor/etage.generated';


@Injectable({
  providedIn: 'root'
})
export class EtageService {

  constructor(private apollo: Apollo) { }

  getAllFloors() {
    return this.apollo.watchQuery<GetFloorsQuery>({
      query: GetFloorsDocument
    }).valueChanges.pipe(
      map(result => result.data.floorList),
      catchError(error => {
        console.error('Erreur lors de la récupération des étages:', error);
        return throwError(error);
      })
    );
  }

  getFloorById(id: string): Observable<any> {
    return this.apollo.watchQuery<GetFloorByIdQuery>({
      query: GetFloorByIdDocument,
      variables: { id }
    }).valueChanges.pipe(
      map(result => result.data.floor),
      catchError(error => {
        console.error('Erreur lors de la récupération de l\'étage:', error);
        return throwError(error);
      })
    );
  }

  createFloor(name: string, code: string, buildingId: any, description: string): Observable<any> {
    return this.apollo.mutate<CreateFloorMutation>({
      mutation: CreateFloorDocument,
      variables: { name, code, buildingId, description },
      refetchQueries: [{ query: GetFloorsDocument }]
    }).pipe(
      map(result => result.data?.floorMutation?.save),
      catchError(error => {
        console.error('Erreur lors de la création de l\'étage:', error);
        return throwError(error);
      })
    );
  }

  updateFloor(id: number, name: string, code: string, description: string, building: any): Observable<any> {
    return this.apollo.mutate<UpdateFloorMutation>({
      mutation: UpdateFloorDocument,
      variables: { id, name, code, description, building },
      refetchQueries: [{ query: GetFloorsDocument }]
    }).pipe(
      map(result => result.data?.floorMutation?.save),
      catchError(error => {
        console.error('Erreur lors de la mise à jour de l\'étage:', error);
        return throwError(error);
      })
    );
  }

  deleteFloor(id: number): Observable<any> {
    return this.apollo.mutate<DeleteFloorMutation>({
      mutation: DeleteFloorDocument,
      variables: { id },
      refetchQueries: [{ query: GetFloorsDocument }]
    }).pipe(
      map(result => result.data?.floorMutation?.delete),
      catchError(error => {
        console.error('Erreur lors de la suppression de l\'étage:', error);
        return throwError(error);
      })
    );
  }
  searchetageName(name: string): Observable<any[]> {
    return this.getAllFloors().pipe(
      map(Floors => {
        return Floors.filter((Floor :any)=> Floor.name.toLowerCase().includes(name.toLowerCase()));
      })
    );
  }



}
