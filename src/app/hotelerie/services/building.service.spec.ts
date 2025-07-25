import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { BuildingService } from './building.service';
import { of } from 'rxjs';
import {
  GetBuildingByIdDocument,
  UpdateBuildingDocument,
  CreateBuildingDocument,
  DeleteBuildingDocument,
  BuildingListDocument,
} from '../component/building/building.generated';

fdescribe('BuildingService', () => {
  let service: BuildingService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [BuildingService],
    });

    service = TestBed.inject(BuildingService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get a building by ID', () => {
    const mockResponse = {
      data: {
        building: {
          id: '1',
          code: 'A1',
          name: 'Building A1',
        },
      },
    };

    service.getBuildingById('1').subscribe((building) => {
      expect(building).toEqual(mockResponse.data.building);
    });

    const op = controller.expectOne(GetBuildingByIdDocument);
    expect(op.operation.variables).toEqual({ id: 1 });
    op.flush(mockResponse);
  });
});
