import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { IngredientService } from './ingredient.service';
import { of } from 'rxjs';
import {CreateIngredientDocument, IngredientListDocument,} from '../componnent/ingredient/ingredient.generated';

fdescribe('IngredientService', () => {
  let service: IngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [IngredientService],
    });
    service = TestBed.inject(IngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an ingredient', () => {
    const mockIngredient = {
      data: {
        ingredientMutation: {
          save: {
            id: 1,
            name: 'Test Ingredient',
            price: 10,
            unitPrice: 'per kg',
            supplier: 'Supplier A',
            isCanceled: false
          },
        },
      },
    };

    const createSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockIngredient as any)
    );

    service.addIngredient('Test Ingredient', 10, 'per kg', 'Supplier A').subscribe(result => {
      expect(result).toEqual(mockIngredient.data.ingredientMutation.save);
    });

    expect(createSpy).toHaveBeenCalledWith({
      mutation: CreateIngredientDocument,
      variables: {
        name: 'Test Ingredient',
        price: 10,
        unitPrice: 'per kg',
        supplier: 'Supplier A',
      },
      refetchQueries: [{ query: IngredientListDocument }],
    });
  });

  it('should update an ingredient', () => {
    const mockIngredient = {
      data: {
        ingredientMutation: {
          save: {
            id: '1',
            name: 'Updated Ingredient',
            price: 15,
            unitPrice: 'per kg',
            supplier: 'Supplier B',
          },
        },
      },
    };

    const updateSpy = spyOn(service['updateIngredientGQL'], 'mutate').and.returnValue(
      of(mockIngredient as any)
    );

    service.updateIngredient('1', 'Updated Ingredient', 15, 'per kg', 'Supplier B', false).subscribe(result => {
      expect(result).toEqual(mockIngredient.data.ingredientMutation.save);
    });

    expect(updateSpy).toHaveBeenCalledWith({
      id: 1,
      name: 'Updated Ingredient',
      price: 15,
      unitPrice: 'per kg',
      supplier: 'Supplier B',
      isCanceled: false,
    });
  });

  it('should delete an ingredient', () => {
    const mockResponse = {
      data: {
        ingredientMutation: {
          delete: true,
        },
      },
    };

    const deleteSpy = spyOn(service['deleteIngredientGQL'], 'mutate').and.returnValue(
      of(mockResponse as any)
    );

    service.deleteIngredient('1').subscribe(result => {
      expect(result).toEqual(true);
    });

    expect(deleteSpy).toHaveBeenCalledWith({
      id: 1,
    });
  });
});

