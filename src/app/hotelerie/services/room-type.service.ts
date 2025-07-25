import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {catchError, Observable, throwError} from "rxjs";
import {
  CreateRoomTypeMutation,
  DeleteRoomTypeMutation,
  UpdateRoomTypeMutation,
  GetRoomTypeByIdQuery,
  RoomTypeListQuery,
  UpdateRoomTypeDocument,
  CreateRoomTypeDocument,
  DeleteRoomTypeDocument,
  GetRoomTypeByIdDocument,
  RoomTypeListDocument
} from "../component/room-type/room-type.generated";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  constructor(private apollo: Apollo) { }

  getAllRoomTypes(): Observable<RoomTypeListQuery['roomTypeList']> {
    return this.apollo.watchQuery<RoomTypeListQuery>({
      query: RoomTypeListDocument
    }).valueChanges.pipe(
      map((result: any) => result.data.roomTypeList),
      catchError(error => {
        console.error('Erreur lors de la récupération des types de chambres:', error);
        return throwError(error);
      })
    );
  }

  addRoomType(type: string): Observable<CreateRoomTypeMutation['roomTypeMutation']> {
    return this.apollo.mutate<CreateRoomTypeMutation>({
      mutation: CreateRoomTypeDocument,
      variables: { type },
      refetchQueries: [{ query: RoomTypeListDocument }]
    }).pipe(
      map((result: any) => result.data.roomTypeMutation.save),
      catchError(error => {
        console.error('Erreur lors de l\'ajout du type de chambre:', error);
        return throwError(error);
      })
    );
  }

  updateRoomType(id: number, type: string): Observable<UpdateRoomTypeMutation['roomTypeMutation']> {
    return this.apollo.mutate<UpdateRoomTypeMutation>({
      mutation: UpdateRoomTypeDocument,
      variables: { id, type },
      refetchQueries: [{ query: RoomTypeListDocument }]
    }).pipe(
      map((result: any) => result.data.roomTypeMutation.save),
      catchError(error => {
        console.error('Erreur lors de la mise à jour du type de chambre:', error);
        return throwError(error);
      })
    );
  }

  deleteRoomType(id: number): Observable<DeleteRoomTypeMutation['roomTypeMutation']> {
    return this.apollo.mutate<DeleteRoomTypeMutation>({
      mutation: DeleteRoomTypeDocument,
      variables: { id },
      refetchQueries: [{ query: RoomTypeListDocument }]
    }).pipe(
      map((result: any) => result.data.roomTypeMutation.delete),
      catchError(error => {
        console.error('Erreur lors de la suppression du type de chambre:', error);
        return throwError(error);
      })
    );
  }

  getRoomTypeById(id: string): Observable<GetRoomTypeByIdQuery['roomType']> {
    return this.apollo.watchQuery<GetRoomTypeByIdQuery>({
      query: GetRoomTypeByIdDocument,
      variables: { id }
    }).valueChanges.pipe(
      map((result: any) => result.data.roomType),
      catchError(error => {
        console.error('Erreur lors de la récupération du type de chambre:', error);
        return throwError(error);
      })
    );
  }
  searchtypechambre(type: string): Observable<any[]> {
    return this.getAllRoomTypes().pipe(
      map(types => {
        return types.filter((typeRoom :any)=> typeRoom.type.toLowerCase().includes(type.toLowerCase()));
      })
    );
  }

}
