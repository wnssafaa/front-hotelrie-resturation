import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { CommandService } from './command.service';
import { of } from 'rxjs';
import {
  CreateOrderDocument,
  UpdateOrderDocument,
  OrderListDocument
} from '../componnent/commande/commande.generated';

fdescribe('CommandService', () => {
  let service: CommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [CommandService],
    });
    service = TestBed.inject(CommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a commande', () => {
    const mockCommande = {
      data: {
        orderMutation: {
          save: {
            id: '1',
            status: 'Pending',
            mealIds: [1, 2, 3],
            patient: 'John Doe',
            date: '2024-07-16T14:33:36.521Z',
            isCanceled: false,
          },
        },
      },
    };

    const createSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockCommande as any)
    );

    service.addCommande('Pending', [1, 2, 3], 'John Doe', '2024-07-16T14:33:36.521Z', false).subscribe(result => {
      expect(result).toEqual(mockCommande.data.orderMutation.save);
    });

    expect(createSpy).toHaveBeenCalledWith({
      mutation: CreateOrderDocument,
      variables: {
        status: 'Pending',
        mealIds: [1, 2, 3],
        patient: 'John Doe',
        date: '2024-07-16T14:33:36.521Z',
        isCanceled: false,
      },
      refetchQueries: [{ query: OrderListDocument }],
    });
  });

  it('should update a commande', () => {
    const mockCommande = {
      data: {
        orderMutation: {
          save: {
            id: '1', // Utilisez une chaîne de caractères pour l'ID ici
            status: 'Completed',
            mealIds: [4, 5, 6],
            patient: 'Jane Smith',
            date: '2024-07-16T14:33:36.521Z',
            isCanceled: false,
          },
        },
      },
    };

    const updateSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockCommande as any)
    );

    service.updateCommande('1', 'Completed', [4, 5, 6], 'Jane Smith', '2024-07-16T14:33:36.521Z', false).subscribe(result => {
      expect(result).toEqual(mockCommande.data.orderMutation.save);
    });

    expect(updateSpy).toHaveBeenCalledWith({
      mutation: UpdateOrderDocument,
      variables: {
        id: '1', // Assurez-vous que l'ID est une chaîne de caractères ici
        status: 'Completed',
        mealIds: [4, 5, 6],
        patient: 'Jane Smith',
        date: '2024-07-16T14:33:36.521Z',
        isCanceled: false,
      },
      refetchQueries: [{ query: OrderListDocument }],
    });
  });



});

