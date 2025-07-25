import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { BedTypeService } from './bed-type.service';
import { of } from 'rxjs';
import {
  CreateBedTypeMutation,
  CreateBedTypeDocument,
  BedTypeListDocument, DeleteBedTypeDocument, UpdateBedTypeDocument,
} from '../component/bed-type/type-lit.generated';
import createSpy = jasmine.createSpy;

fdescribe('BedTypeService', () => {
  let service: BedTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [BedTypeService],
    });
    service = TestBed.inject(BedTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add a bed type', () => {
    const mockBedType = {
      data: {
        bedTypeMutation: {
          __typename: 'BedTypeMutation',
          save: {
            __typename: 'BedType',
            id: 1,
            label: 'Test Bed Type',
          },
        },
      },
    };

    const createSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockBedType as any)
    );

    service.addBedType('Test Bed Type').subscribe(result => {
      // @ts-ignore
      return expect(result).toEqual(mockBedType.data.bedTypeMutation.save);
    });

    expect(createSpy).toHaveBeenCalledWith({
      mutation: CreateBedTypeDocument,
      variables: {
        label: 'Test Bed Type',
      },
      refetchQueries: [{ query: BedTypeListDocument }],
    });
  });


  it('should update a bed type', () => {
    const mockBedType = {
      data: {
        bedTypeMutation: {
          save: {
            id: '1',
            label: 'Updated Bed Type',
          },
        },
      },
    };

    const updateSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockBedType as any)
    );

    service.updateBedType('1', 'Updated Bed Type').subscribe(result => {
      // @ts-ignore
      return expect(result).toEqual(mockBedType.data.bedTypeMutation.save);
    });

    expect(updateSpy).toHaveBeenCalledWith({
      mutation: UpdateBedTypeDocument,
      variables: {
        id: '1',
        label: 'Updated Bed Type',
      },
      refetchQueries: [{ query: BedTypeListDocument }],
    });
  });

  it('should delete a bed type', () => {
    const mockResponse = {
      data: {
        bedTypeMutation: {
          delete: {
            success: true,
          },
        },
      },
    };

    const deleteSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockResponse as any)
    );

    service.deleteBedType('1').subscribe(result => {
      // @ts-ignore
      expect(result.success).toEqual(true);
    });

    expect(deleteSpy).toHaveBeenCalledWith({
      mutation: DeleteBedTypeDocument,
      variables: {
        id: '1',
      },
      refetchQueries: [{ query: BedTypeListDocument }],
    });
  });

});
