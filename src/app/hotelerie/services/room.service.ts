import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  GetRoomByIdQuery,
  GetRoomByIdDocument,

  UpdateRoomDocument,UpdateRoomMutation,
  CreateRoomMutation, CreateRoomDocument, DeleteRoomDocument, DeleteRoomMutation, RoomListQuery, RoomListDocument
} from '../component/room/room.generated';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private apollo: Apollo,) { }

  getAllChambres(): Observable<any[]> {
    return this.apollo.watchQuery<RoomListQuery>({
      query: RoomListDocument
    }).valueChanges.pipe(
      map((result: any) => result.data.roomList),
      catchError(error => {
        console.error('Erreur lors de la récupération des chambres:', error);
        return throwError(error);
      })
    );
  }

  addChambre(chambreData: any): Observable<any> {
    const {
      label,
      code,
      floor,
      ward,
      roomType,
      bedCpt,
      status,
      bedCode,
      bedType,
      bedName
    } = chambreData;

    return this.apollo.mutate<CreateRoomMutation>({
      mutation: CreateRoomDocument,
      variables: {
        label,
        code,
        floorId: { id: floor },
        wardId: { id: ward },
        roomTypeId: { id: roomType },
        bedCpt,
        status,
        bedCode,
        bedType: { id: bedType },
        bedName
      },
      refetchQueries: [{ query: RoomListDocument }]
    }).pipe(
      map((result: any) => result.data.createRoom),
      catchError(error => {
        console.error('Erreur lors de l\'ajout de la chambre:', error);
        return throwError(error);
      })
    );
  }
  updateChambre(chambreData: any): Observable<any> {
    const {
      id,
      label,
      code,
      floor,
      ward,
      roomType,
      bedCpt,
      status,
      bedCode,
      bedType,
      bedName,
      bedStatus,
      options
    } = chambreData;



    return this.apollo.mutate<UpdateRoomMutation>({
      mutation: UpdateRoomDocument,
      variables: {
        id,
        label,
        code,
        floorId: { id: floor },
        wardId: { id: ward },
        roomTypeId: { id: roomType },
        bedType: { id: bedType },
        bedCpt,
        status,
        bedCode,
        bedName,
        bedStatus,
        options
      },
      refetchQueries: [{ query: RoomListDocument }]
    }).pipe(
      map((result: any) => result.data.roomMutation.save),
      catchError(error => {
        console.error('Erreur lors de la mise à jour de la chambre:', error);
        return throwError(error);
      })
    );
  }

  deleteChambre(id: string): Observable<any> {
    return this.apollo.mutate<DeleteRoomMutation>({
      mutation: DeleteRoomDocument,
      variables: { id },
      refetchQueries: [{ query: RoomListDocument }]
    }).pipe(
      map((result: any) => result.data.roomMutation.delete),
      catchError(error => {
        console.error('Erreur lors de la suppression de la chambre:', error);
        return throwError(error);
      })
    );
  }

  getChambreById(id: string): Observable<any> {
    return this.apollo.watchQuery<GetRoomByIdQuery>({
      query: GetRoomByIdDocument,
      variables: { id }
    }).valueChanges.pipe(
      map((result: any) => result.data.room),
      catchError(error => {
        console.error('Erreur lors de la récupération de la chambre:', error);
        return throwError(error);
      })
    );
  }
  searchRoomsByLabel(label: string): Observable<any[]> {
    return this.getAllChambres().pipe(
      map(Rooms => {
        return Rooms.filter((Room :any)=> Room.label.toLowerCase().includes(label.toLowerCase()));
      })
    );
  }


}
