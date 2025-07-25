import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RegimService } from './regim.service';
import { of } from 'rxjs';
import {DietListDocument,} from '../componnent/diet/diet.generated';

fdescribe('RegimService', () => {
  let service: RegimService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [RegimService],
    });
    service = TestBed.inject(RegimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a regime', () => {
    const mockRegime = {
      data: {
        dietMutation: {
          save: {
            id: 1,
            code: 'R001',
            description: 'Test Regime',
            label: 'Regime A',
            isCanceled: false,
          },
        },
      },
    };

    const createSpy = spyOn(service['createDietGQL'], 'mutate').and.returnValue(
      of(mockRegime as any)
    );

    service.addRegime({
      code: 'R001',
      description: 'Test Regime',
      label: 'Regime A',
      iscanceled: false,
    }).subscribe(result => {
      expect(result).toEqual(mockRegime.data.dietMutation.save);
    });

    expect(createSpy).toHaveBeenCalledWith({
      code: 'R001',
      description: 'Test Regime',
      label: 'Regime A',
      isCanceled: false,
    }, { refetchQueries: [{ query: DietListDocument }] });
  });

  it('should update a regime', () => {
    const mockRegime = {
      data: {
        dietMutation: {
          save: {
            id: '1',
            code: 'R002',
            description: 'Updated Regime',
            label: 'Regime B',
            isCanceled: false,
          },
        },
      },
    };

    const updateSpy = spyOn(service['updateDietGQL'], 'mutate').and.returnValue(
      of(mockRegime as any)
    );

    service.updateRegime({
      id: '1',
      code: 'R002',
      description: 'Updated Regime',
      label: 'Regime B',
      iscanceled: false,
    }).subscribe(result => {
      expect(result).toEqual(mockRegime.data.dietMutation.save);
    });

    expect(updateSpy).toHaveBeenCalledWith({
      id: 1,
      code: 'R002',
      description: 'Updated Regime',
      label: 'Regime B',
      isCanceled: false,
    }, { refetchQueries: [{ query: DietListDocument }] });
  });

  it('should delete a regime', () => {
    const mockResponse = {
      data: {
        dietMutation: {
          delete: true,
        },
      },
    };

    const deleteSpy = spyOn(service['deleteDietGQL'], 'mutate').and.returnValue(
      of(mockResponse as any)
    );

    service.deleteRegime(1).subscribe(result => {
      expect(result).toEqual(true);
    });

    expect(deleteSpy).toHaveBeenCalledWith({
      id: 1,
    }, { refetchQueries: [{ query: DietListDocument}] });
  });
});
