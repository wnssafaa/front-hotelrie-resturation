import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { RepasService } from './repas.service';
import { MealListDocument, GetMealByIdDocument, CreateMealDocument, DeleteMealDocument, UpdateMealDocument } from '../componnent/meal/repas.generated';
import { DietListDocument } from '../componnent/diet/diet.generated';

fdescribe('RepasService', () => {
  let service: RepasService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [RepasService]
    });

    service = TestBed.inject(RepasService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch meals', (done) => {
    service.getRepas().subscribe((meals) => {
      expect(meals).toEqual([{ id: '1', label: 'Meal 1' }]);
      done();
    });

    const op = controller.expectOne(MealListDocument);

    op.flush({
      data: {
        mealList: [{ id: '1', label: 'Meal 1' }]
      }
    });

    expect(op.operation.variables).toEqual({});
  });

  it('should fetch meal by ID', (done) => {
    service.getRepasById('1').subscribe((meal) => {
      expect(meal).toEqual({ id: '1', label: 'Meal 1' });
      done();
    });

    const op = controller.expectOne(GetMealByIdDocument);

    op.flush({
      data: {
        meal: { id: '1', label: 'Meal 1' }
      }
    });

    expect(op.operation.variables).toEqual({ id: '1' });
  });



  it('should fetch diets', (done) => {
    service.getRegimes().subscribe((diets) => {
      expect(diets).toEqual([{ id: '1', code: 'Diet 1' }]);
      done();
    });

    const op = controller.expectOne(DietListDocument);

    op.flush({
      data: {
        dietList: [{ id: '1', code: 'Diet 1' }]
      }
    });

    expect(op.operation.variables).toEqual({});
  });


  it('should search meals by label', (done) => {
    service.searchMealByLabel('Meal').subscribe((meals) => {
      expect(meals).toEqual([{ id: '1', label: 'Meal 1' }]);
      done();
    });

    const op = controller.expectOne(MealListDocument);

    op.flush({
      data: {
        mealList: [{ id: '1', label: 'Meal 1' }]
      }
    });

    expect(op.operation.variables).toEqual({});
  });
});
