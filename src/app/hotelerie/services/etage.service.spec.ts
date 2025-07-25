import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { EtageService } from './etage.service';
import { of } from 'rxjs';
import {
  GetFloorsDocument,
  GetFloorByIdDocument,
  CreateFloorDocument,
  UpdateFloorDocument,
  DeleteFloorDocument,
  CreateFloorMutation,
  UpdateFloorMutation,
  DeleteFloorMutation,
  GetFloorsQuery,
  GetFloorByIdQuery
} from '../component/floor/etage.generated';

fdescribe('EtageService', () => {
  let service: EtageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [EtageService],
    });
    service = TestBed.inject(EtageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all floors', () => {
    const mockFloors = {
      data: {
        floorList: [
          {
            id: 1,
            name: 'Floor 1',
            code: 'F1',
            description: 'First floor',
            building: { __typename: 'BuildingType', id: 1 }
          },
          {
            id: 2,
            name: 'Floor 2',
            code: 'F2',
            description: 'Second floor',
            building: { __typename: 'BuildingType', id: 1 }
          },
        ],
      },
    };

    // @ts-ignore
    spyOn(service['apollo'], 'watchQuery').and.returnValue({
      valueChanges: of(mockFloors as any),
    });

    service.getAllFloors().subscribe((floors) => {
      // @ts-ignore
      return expect(floors).toEqual(mockFloors.data.floorList);
    });
  });


  it('should fetch a floor by ID', () => {
    const mockFloor = {
      data: {
        floor: { id: 1, name: 'Floor 1', code: 'F1', description: 'First floor', buildingId: 1 },
      },
    };

    // @ts-ignore
    spyOn(service['apollo'], 'watchQuery').and.returnValue({
      valueChanges: of(mockFloor as any),
    });

    service.getFloorById('1').subscribe((floor) => {
      expect(floor).toEqual(mockFloor.data.floor);
    });
  });

  it('should create a floor', () => {
    const newFloor = { id: 3, name: 'Floor 3', code: 'F3', buildingId: 1, description: 'Third floor' };
    const mockResponse = {
      data: {
        floorMutation: {
          save: newFloor,
        },
      },
    };

    const createSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockResponse as any)
    );

    service.createFloor('Floor 3', 'F3', 1, 'Third floor').subscribe((result) => {
      expect(result).toEqual(mockResponse.data.floorMutation.save);
    });

    expect(createSpy).toHaveBeenCalledWith({
      mutation: CreateFloorDocument,
      variables: {
        name: 'Floor 3',
        code: 'F3',
        buildingId: 1,
        description: 'Third floor',
      },
      refetchQueries: [{ query: GetFloorsDocument }],
    });
  });

  it('should update a floor', () => {
    const updatedFloor = { id: 1, name: 'Updated Floor', code: 'UF', description: 'Updated floor', buildingId: 1 };
    const mockResponse = {
      data: {
        floorMutation: {
          save: updatedFloor,
        },
      },
    };

    const updateSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockResponse as any)
    );

    service.updateFloor(1, 'Updated Floor', 'UF', 'Updated floor', 1).subscribe((result) => {
      expect(result).toEqual(mockResponse.data.floorMutation.save);
    });

    expect(updateSpy).toHaveBeenCalledWith({
      mutation: UpdateFloorDocument,
      variables: {
        id: 1,
        name: 'Updated Floor',
        code: 'UF',
        description: 'Updated floor',
        building: 1,
      },
      refetchQueries: [{ query: GetFloorsDocument }],
    });
  });

  it('should delete a floor', () => {
    const mockResponse = {
      data: {
        floorMutation: {
          delete: true,
        },
      },
    };

    const deleteSpy = spyOn(service['apollo'], 'mutate').and.returnValue(
      of(mockResponse as any)
    );

    service.deleteFloor(1).subscribe((result) => {
      expect(result).toEqual(mockResponse.data.floorMutation.delete);
    });

    expect(deleteSpy).toHaveBeenCalledWith({
      mutation: DeleteFloorDocument,
      variables: {
        id: 1,
      },
      refetchQueries: [{ query: GetFloorsDocument }],
    });
  });

  it('should search floors by name', () => {
    const mockFloors = [
      { id: 1, name: 'Floor 1', code: 'F1', description: 'First floor', buildingId: 1 },
      { id: 2, name: 'Floor 2', code: 'F2', description: 'Second floor', buildingId: 1 },
    ];

    // @ts-ignore
    spyOn(service, 'getAllFloors').and.returnValue(of(mockFloors));

    service.searchetageName('Floor 1').subscribe((floors) => {
      expect(floors).toEqual([mockFloors[0]]);
    });
  });
});
