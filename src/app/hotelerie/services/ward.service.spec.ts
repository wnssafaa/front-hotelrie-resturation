import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { WardService } from './ward.service';
import { of } from 'rxjs';
import {
  CreateWardMutation,
  CreateWardDocument,
  WardListDocument,
  UpdateWardMutation,
  UpdateWardDocument,
  DeleteWardMutation,
  DeleteWardDocument,
  GetWardByIdQuery,
  GetWardByIdDocument,
} from '../component/ward/ward.generated';

fdescribe('WardService', () => {
  let service: WardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [WardService],
    });
    service = TestBed.inject(WardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a ward', () => {
    const mockWard = {
      data: {
        wardMutation: {
          save: {
            id: 1,
            name: 'Test Ward',
            code: 'W001',
            description: 'Test ward description',
            isPrivate: true,
          },
        },
      },
    };

    const createSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockWard as any)
    );

    service.addWard('Test Ward', 'W001', 'Test ward description', true).subscribe(result => {
      expect(result).toEqual(mockWard.data.wardMutation.save);
    });

    expect(createSpy).toHaveBeenCalledWith({
      mutation: CreateWardDocument,
      variables: {
        name: 'Test Ward',
        code: 'W001',
        description: 'Test ward description',
        isPrivate: true,
      },
      refetchQueries: [{ query: WardListDocument }],
    });
  });

  it('should update a ward', () => {
    const mockWard = {
      data: {
        wardMutation: {
          save: {
            id: '1',
            name: 'Updated Ward',
            code: 'W002',
            description: 'Updated ward description',
            isPrivate: false,
          },
        },
      },
    };

    const updateSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockWard as any)
    );

    service.updateWard(1, 'Updated Ward', 'W002', 'Updated ward description', false).subscribe(result => {
      expect(result).toEqual(mockWard.data.wardMutation.save);
    });

    expect(updateSpy).toHaveBeenCalledWith({
      mutation: UpdateWardDocument,
      variables: {
        id: 1,
        name: 'Updated Ward',
        code: 'W002',
        description: 'Updated ward description',
        isPrivate: false,
      },
      refetchQueries: [{ query: WardListDocument }],
    });
  });

  it('should delete a ward', () => {
    const mockResponse = {
      data: {
        wardMutation: {
          erase: true,
        },
      },
    };

    const deleteSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockResponse as any)
    );

    const deleteMutation = DeleteWardDocument; // Assign the mutation document to a variable

    service.deleteWard(1).subscribe(result => {
      expect(result).toEqual(true);
    });

    expect(deleteSpy).toHaveBeenCalledWith({
      mutation: deleteMutation,
      variables: { pk: 1 },
      refetchQueries: [{ query: WardListDocument }],
    });
  });

  it('should get ward by ID', () => {
    const mockWard = {
      data: {
        ward: {
          id: '1',
          name: 'Test Ward',
          code: 'W001',
          description: 'Test ward description',
          isPrivate: true,
        },
      },
    };

    // @ts-ignore
    const watchQuerySpy = spyOn(service['apollo'], 'watchQuery').and.returnValue({
      valueChanges: of(mockWard as any),
    });

    service.getWardById('1').subscribe(result => {
      expect(result).toEqual(mockWard.data.ward);
    });

    expect(watchQuerySpy).toHaveBeenCalledWith({
      query: GetWardByIdDocument,
      variables: { id: '1' },
    });
  });

  it('should search ward by name', () => {
    const mockWards = [
      { id: 1, name: 'Ward A' },
      { id: 2, name: 'Ward B' },
      { id: 3, name: 'Ward C' },
    ];

    const getAllSpy = spyOn(service, 'getAllWards').and.returnValue(
      of(mockWards as any)
    );

    service.searchWardByName('ward').subscribe(result => {
      expect(result.length).toEqual(3); // Assuming all wards match the search
      expect(result[0].name).toContain('Ward');
    });

  });
});
