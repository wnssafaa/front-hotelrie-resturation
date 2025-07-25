import { Injectable } from '@angular/core';
import {
  CreateBedTypeDocument,
  CreateBedTypeMutation,
  UpdateBedTypeDocument,
  UpdateBedTypeMutation, //SEARCH_typelit,
  GetBedTypeByIdQuery,
  GetBedTypeByIdDocument,
  BedTypeListQuery,
  BedTypeListDocument,
  DeleteBedTypeMutation,
  DeleteBedTypeDocument
} from "../component/bed-type/type-lit.generated"
import {map} from "rxjs/operators";
import {catchError, Observable, throwError} from "rxjs";
import {Apollo} from "apollo-angular";


@Injectable({
  providedIn: 'root'
})
export class BedTypeService {

  constructor(private apollo: Apollo) { }

  getAllBedTypes(): Observable<BedTypeListQuery['bedTypeList']> {
    return this.apollo.watchQuery<BedTypeListQuery>({
      query: BedTypeListDocument
    }).valueChanges.pipe(
      map((result: any) => result.data.bedTypeList),
      catchError(error => {
        console.error('Erreur lors de la récupération des types lit:', error);
        return throwError(error);
      })
    );
  }

  addBedType(label: string): Observable<CreateBedTypeMutation['bedTypeMutation']> {
    return this.apollo.mutate<CreateBedTypeMutation>({
      mutation: CreateBedTypeDocument,
      variables: { label },
      refetchQueries: [{ query: BedTypeListDocument }]
    }).pipe(
      map((result: any) => result.data.bedTypeMutation.save),
      catchError(error => {
        console.error('Erreur lors de l\'ajout du type lit:', error);
        return throwError(error);
      })
    );
  }

  updateBedType(id: string, label: string): Observable<UpdateBedTypeMutation['bedTypeMutation']> {
    return this.apollo.mutate<UpdateBedTypeMutation>({
      mutation: UpdateBedTypeDocument,
      variables: { id, label },
      refetchQueries: [{ query: BedTypeListDocument }]
    }).pipe(
      map((result: any) => result.data.bedTypeMutation.save),
      catchError(error => {
        console.error('error lors de la mise à jour du type lit:', error);
        return throwError(error);
      })
    );
  }

  getBedTypeById(id: string): Observable<GetBedTypeByIdQuery['bedType']> {
    return this.apollo.watchQuery<GetBedTypeByIdQuery>({
      query: GetBedTypeByIdDocument,
      variables: { id }
    }).valueChanges.pipe(
      map((result: any) => result.data.bedType),
      catchError(error => {
        console.error('error lors de la récupération du type lit par ID:', error);
        return throwError(error);
      })
    );
  }
  deleteBedType(id: string): Observable<DeleteBedTypeMutation['bedTypeMutation']> {
    return this.apollo.mutate<DeleteBedTypeMutation>({
      mutation: DeleteBedTypeDocument,
      variables: { id },
      refetchQueries: [{ query: BedTypeListDocument }]
    }).pipe(
      map((result: any) => result.data.bedTypeMutation.delete),
      catchError(error => {
        console.error('Erreur lors de la suppression du type lit:', error);
        return throwError(error);
      })
    );
  }
  searchtypelit(label: string): Observable<any[]> {
    return this.getAllBedTypes().pipe(
      map(BedTypes => {
        return BedTypes.filter((BedType :any)=> BedType.label.toLowerCase().includes(label.toLowerCase()));
      })
    );
  }

}
