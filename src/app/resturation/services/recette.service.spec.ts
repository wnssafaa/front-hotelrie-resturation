import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { RecetteService } from './recette.service';
import {
  CreateRecipeDocument,
  DeleteRecipeDocument,
  UpdateRecipeDocument,
  RecipeListDocument,
  GetRecipeByIdDocument
} from '../componnent/recipe/recette.generated';

fdescribe('RecetteService', () => {
  let service: RecetteService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [RecetteService]
    });

    service = TestBed.inject(RecetteService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should fetch recipes', (done) => {
    const mockRecipes = [{ id: '1', name: 'Recipe 1' }, { id: '2', name: 'Recipe 2' }];

    service.getRecettes().subscribe((recipes) => {
      expect(recipes).toEqual(mockRecipes);
      done();
    });

    const op = controller.expectOne(RecipeListDocument);

    op.flush({
      data: {
        recipeList: mockRecipes
      }
    });
  });

  it('should fetch a recipe by ID', (done) => {
    const mockRecipe = { id: '1', name: 'Recipe 1' };

    service.getRecetteById('1').subscribe((recipe) => {
      expect(recipe).toEqual(mockRecipe);
      done();
    });

    const op = controller.expectOne(GetRecipeByIdDocument);

    op.flush({
      data: {
        recipe: mockRecipe
      }
    });
  });

  it('should add a recipe', (done) => {
    const newRecipe = { name: 'New Recipe', Category: 'Dessert', ProductionValue: 10, unitProductionValue: 'kg', isCanceled: false, IngredientRecipe: [], SousRecipe: [] };
    const mockResponse = { save: { id: '1', name: 'New Recipe' } };

    service.addRecette(newRecipe).subscribe((response) => {
      expect(response).toEqual(mockResponse.save);
      done();
    });

    const addOp = controller.expectOne(CreateRecipeDocument);
    addOp.flush({
      data: {
        recipeMutation: {
          save: mockResponse.save
        }
      }
    });

    const refetchOp = controller.expectOne(RecipeListDocument);
    refetchOp.flush({
      data: {
        recipeList: []
      }
    });
  });


  it('should update a recipe', (done) => {
    const updatedRecipe = { id: '1', name: 'Updated Recipe', Category: 'Dessert', ProductionValue: 15, unitProductionValue: 'kg', isCanceled: false, ingredientRecipes: [], sousRecipes: [] };
    const mockResponse = { save: { id: '1', name: 'Updated Recipe' } };

    service.updateRecette(updatedRecipe).subscribe((response) => {
      expect(response).toEqual(mockResponse.save);
      done();
    });

    const updateOp = controller.expectOne(UpdateRecipeDocument);
    updateOp.flush({
      data: {
        recipeMutation: {
          save: mockResponse.save
        }
      }
    });

    const refetchOp = controller.expectOne(RecipeListDocument);
    refetchOp.flush({
      data: {
        recipeList: []
      }
    });
  });


  it('should delete a recipe', (done) => {
    const mockResponse = { delete: true };

    service.deleteRecette('1').subscribe((response) => {
      expect(response).toEqual(mockResponse.delete);
      done();
    });

    const deleteOp = controller.expectOne(DeleteRecipeDocument);
    deleteOp.flush({
      data: {
        recipeMutation: {
          delete: mockResponse.delete
        }
      }
    });

    const refetchOp = controller.expectOne(RecipeListDocument);
    refetchOp.flush({
      data: {
        recipeList: []
      }
    });
  });

  it('should cancel a recipe', (done) => {
    const recipeToCancel = { id: '1', name: 'Recipe to Cancel', Category: 'Dessert', ProductionValue: 10, unitProductionValue: 'kg', isCanceled: false };
    const mockResponse = { save: { id: '1', name: 'Recipe to Cancel', isCanceled: true } };

    service.cancelRecette(recipeToCancel).subscribe((response) => {
      expect(response).toEqual(mockResponse.save);
      done();
    });

    const cancelOp = controller.expectOne(UpdateRecipeDocument);
    cancelOp.flush({
      data: {
        recipeMutation: {
          save: mockResponse.save
        }
      }
    });

    const refetchOp = controller.expectOne(RecipeListDocument);
    refetchOp.flush({
      data: {
        recipeList: []
      }
    });
  });

});
