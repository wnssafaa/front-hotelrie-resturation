import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  CreateOrderMutation,
  UpdateOrderMutation,
  GetOrderByIdQuery,
  GetOrderByIdDocument,
  CreateOrderDocument,
  UpdateOrderDocument,
  OrderListDocument,
  OrderListQuery
} from '../componnent/commande/commande.generated';
import moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private apollo: Apollo) { }

  getAllCommandes(): Observable<any[]> {
    return this.apollo
      .watchQuery<OrderListQuery>({
        query: OrderListDocument
      })
      .valueChanges.pipe(
        map((result) => result.data.orderList),
        catchError(error => {
          console.error('Erreur lors de la récupération des commandes:', error);
          return throwError(error);
        })
      );
  }

  addCommande(status: string, mealIds: any[], patient: string, date: string, isCanceled: boolean): Observable<any> {
    //const formattedDate = moment('2024-07-16T14:33:36.521Z').toISOString();


    return this.apollo
      .mutate<CreateOrderMutation>({
        mutation: CreateOrderDocument,
        variables: {
          status,
          mealIds,
          patient,
          date,//:formattedDate,
          isCanceled
        },
        refetchQueries: [{ query: OrderListDocument }]
      })
      .pipe(map((result) => result.data?.orderMutation?.save));
  }
  updateCommande(id: string, status: string, mealIds: any[], patient: string, date: string, isCanceled: boolean): Observable<any> {
    const formattedDate = moment('2024-07-16T14:33:36.521Z').toISOString();

    return this.apollo
      .mutate<UpdateOrderMutation>({
        mutation: UpdateOrderDocument,
        variables: {
          id,
          status,
          mealIds,
          patient,
          date,//: formattedDate,
          isCanceled
        },
        refetchQueries: [{ query: OrderListDocument }]
      })
      .pipe(map((result) => result.data?.orderMutation?.save));
  }

  getCommandeById(id: string): Observable<any> {
    return this.apollo
      .watchQuery<GetOrderByIdQuery>({
        query: GetOrderByIdDocument,
        variables: { id }
      })
      .valueChanges.pipe(map((result) => result.data?.order));
  }

  cancelOrder(order: any): Observable<any> {
    return this.apollo.mutate<UpdateOrderMutation>({
      mutation: UpdateOrderDocument,
      variables: {
        id: parseInt(order.id),
        status:order.status,
        mealIds:order.mealIds,
        patient:order.patient,
        date:order.date,
        isCanceled:true
      },
      refetchQueries: [{ query: OrderListDocument }]
    }).pipe(map((result: any) => result.data?.orderMutation.save));
  }

  searchcommandeBypatient(patient: string): Observable<any[]> {
    return this.getAllCommandes().pipe(
      map(Orders => {
        return Orders.filter((Order:any)=> Order.patient.toLowerCase().includes(patient.toLowerCase()));
      })
    );
  }




  /*searchcommandeBypatient(patient: string): Observable<any[]> {
    return this.apollo
      .watchQuery({
        query:SEARCH_COMMANDE,
        variables: {
          patient: patient
        }
      })
      .valueChanges.pipe(map((result: any) => result.data.searchcommandeBypatient));
  }
  cancelCommande(id: string, reason: string): Observable<any> {
    return this.apollo.mutate({
      mutation: CANCEL_COMMANDE,
      variables: { id: id, reason: reason },
      refetchQueries: [{ query: GET_COMMANDES }]
    });
    private canceledCommandesKey = 'canceledCommandes';

  getLocalCanceledCommandes(): string[] {
    const canceledCommandesString = localStorage.getItem(this.canceledCommandesKey);
    return canceledCommandesString ? JSON.parse(canceledCommandesString) : [];
  }
  updateLocalCanceledCommande(id: string, canceled: boolean): void {
    let canceledCommandes = this.getLocalCanceledCommandes();
    if (canceled) {
      canceledCommandes.push(id);
    } else {
      canceledCommandes = canceledCommandes.filter(commandeId => commandeId !== id);
    }
    localStorage.setItem(this.canceledCommandesKey, JSON.stringify(canceledCommandes));
  }
  }*/

}
