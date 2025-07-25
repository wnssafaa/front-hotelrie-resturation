import { TestBed } from '@angular/core/testing';
import {ApolloTestingController, ApolloTestingModule} from 'apollo-angular/testing';
import { MenuService } from './menu.service';
import { of } from 'rxjs';
import {
  CreateMenuMutation,
  CreateMenuDocument,
  UpdateMenuMutation,
  UpdateMenuDocument,
  DeleteMenuMutation,
  DeleteMenuDocument,
  MenuListDocument
} from '../componnent/menu/menu.generated';
import {Apollo} from "apollo-angular";

fdescribe('MenuService', () => {
  let service: MenuService;
  let controller: ApolloTestingController;
let apollo:Apollo
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [MenuService],
    });
    service = TestBed.inject(MenuService);
     controller = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a menu', (done: DoneFn) => {
    const mockMenu = {
      title: 'Test Menu',
      mealIds: [{ id: 1, type: 'starter', label: 'Salad' }],
      isCanceled: false
    };

    service.addMenu(mockMenu).subscribe(result => {
      expect(result).toEqual({ id: 1, title: 'Test Menu', isCanceled: false });
      done();
    });

    const op = controller.expectOne(CreateMenuDocument);

    expect(op.operation.variables).toEqual({
      title: 'Test Menu',
      mealIds: [{ id: 1, type: 'starter', label: 'Salad' }],
      isCanceled: false
    });

    op.flush({
      data: {
        menuMutation: {
          save: { id: 1, title: 'Test Menu', isCanceled: false }
        }
      }
    });

    controller.expectOne(MenuListDocument);
  });

  it('should update a menu', (done: DoneFn) => {
    const mockMenu = {
      id: 1,
      title: 'Updated Menu',
      mealIds: [{ id: 1 }],
      isCanceled: false
    };

    service.updateMenu(mockMenu).subscribe(result => {
      expect(result).toEqual({ id: 1, title: 'Updated Menu', isCanceled: false });
      done();
    });

    const op = controller.expectOne(UpdateMenuDocument);

    expect(op.operation.variables).toEqual({
      id: 1,
      title: 'Updated Menu',
      mealIds: [{ id: 1 }],
      isCanceled: false
    });

    op.flush({
      data: {
        menuMutation: {
          save: { id: 1, title: 'Updated Menu', isCanceled: false }
        }
      }
    });

    controller.expectOne(MenuListDocument);
  });

});
