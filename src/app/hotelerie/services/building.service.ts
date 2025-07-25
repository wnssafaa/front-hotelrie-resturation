import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import {
  GetBuildingByIdQuery,
  GetBuildingByIdDocument,
  UpdateBuildingMutation,
  UpdateBuildingDocument,
  CreateBuildingMutation,
  CreateBuildingDocument,
  DeleteBuildingMutation,
  DeleteBuildingDocument,
  BuildingListQuery,BuildingListDocument
} from '../component/building/building.generated';



@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(public apollo: Apollo) { }


  getAllBatiments() {
    return this.apollo.watchQuery<BuildingListQuery>({
      query: BuildingListDocument
    }).valueChanges.pipe(
      map(result => result.data.buildingList),
      catchError(error => {
        console.error('Erreur lors de la récupération des bâtiments:', error);
        return throwError(error);
      })
    );
  }

  addBatiment(code: string, name: string) {
    return this.apollo.mutate<CreateBuildingMutation>({
      mutation: CreateBuildingDocument,
      variables: { code, name},
      refetchQueries: [{ query: BuildingListDocument }]
    }).pipe(
      map(result => result.data?.buildingMutation?.save),
      catchError(error => {
        console.error('Erreur lors de l\'ajout du bâtiment:', error);
        return throwError(error);
      })
    );
  }

  updateBatiment(id: string, code: string, name: string) {
    return this.apollo.mutate<UpdateBuildingMutation>({
      mutation: UpdateBuildingDocument,
      variables: { id: parseInt(id), code, name },
      refetchQueries: [{ query: BuildingListDocument }]
    }).pipe(
      map(result => result.data?.buildingMutation?.save),
      catchError(error => {
        console.error('Erreur lors de la mise à jour du bâtiment:', error);
        return throwError(error);
      })
    );
  }

  deleteBatiment(id: string) {
    return this.apollo.mutate<DeleteBuildingMutation>({
      mutation: DeleteBuildingDocument,
      variables: { id: parseInt(id) },
      refetchQueries: [{ query: BuildingListDocument }]
    }).pipe(
      map(result => result.data?.buildingMutation?.delete),
      catchError(error => {
        console.error('Erreur lors de la suppression du bâtiment:', error);
        return throwError(error);
      })
    );
  }

  getBuildingById(id: string): Observable<any> {
    return this.apollo
      .watchQuery<GetBuildingByIdQuery>({
        query: GetBuildingByIdDocument,
        variables: { id: parseInt(id) }
      })
      .valueChanges.pipe(
        map(result => result.data?.building),
        catchError(error => {
          console.error('Erreur lors de la récupération du bâtiment par ID:', error);
          return throwError(error);
        })
      );
  }
  searchbatimentName(name: string): Observable<any[]> {
    return this.getAllBatiments().pipe(
      map(buildings => {
        return buildings.filter((building :any)=> building.name.toLowerCase().includes(name.toLowerCase()));
      })
    );
  }





}
