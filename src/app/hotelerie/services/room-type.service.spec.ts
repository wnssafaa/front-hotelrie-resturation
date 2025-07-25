import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { RoomTypeService } from './room-type.service';
import {
  CreateRoomTypeDocument, DeleteRoomTypeDocument,
  RoomTypeListDocument, UpdateRoomTypeDocument
} from '../component/room-type/room-type.generated';

fdescribe('RoomTypeService', () => {
  let service: RoomTypeService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [RoomTypeService]
    });

    service = TestBed.inject(RoomTypeService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch all room types', (done) => {
    const mockRoomTypes = [
      { id: 1, type: 'Single' },
      { id: 2, type: 'Double' }
    ];

    service.getAllRoomTypes().subscribe((roomTypes) => {
      expect(roomTypes).toEqual(mockRoomTypes);
      done();
    });

    const op = controller.expectOne(RoomTypeListDocument);

    op.flush({
      data: {
        roomTypeList: mockRoomTypes
      }
    });

    expect(op.operation.variables).toEqual({});
  });
  it('should add a room type', (done) => {
    const mockResponse = {
      __typename: 'RoomTypeMutation',
      save: {
        __typename: 'RoomTypeType',
        id: 1,
        type: 'Single'
      }
    };

    const mockRoomTypes = [
      { id: 1, type: 'Single' },
      { id: 2, type: 'Double' }
    ];

    service.addRoomType('Single').subscribe((response) => {
      // @ts-ignore
      expect(response).toEqual(mockResponse.save);
      done();
    });

    const op = controller.expectOne(CreateRoomTypeDocument);

    op.flush({
      data: {
        roomTypeMutation: mockResponse
      }
    });


    const refetchOp = controller.expectOne(RoomTypeListDocument);

    refetchOp.flush({
      data: {
        roomTypeList: mockRoomTypes
      }
    });

    expect(op.operation.variables).toEqual({ type: 'Single' });
  });

  it('should delete a room type', (done) => {
    const mockResponse = {
      __typename: 'RoomTypeMutation',
      delete: true
    };

    const mockRoomTypes = [
      { id: 1, type: 'Single' },
      { id: 2, type: 'Double' }
    ];

    service.deleteRoomType(1).subscribe((response) => {
      // @ts-ignore
      expect(response).toEqual(mockResponse.delete);
      done();
    });

    const op = controller.expectOne(DeleteRoomTypeDocument);

    op.flush({
      data: {
        roomTypeMutation: mockResponse
      }
    });


    const refetchOp = controller.expectOne(RoomTypeListDocument);

    refetchOp.flush({
      data: {
        roomTypeList: mockRoomTypes
      }
    });

    expect(op.operation.variables).toEqual({ id: 1 });
  });
  it('should update a room type', (done) => {
    const mockResponse = {
      __typename: 'RoomTypeMutation',
      save: {
        __typename: 'RoomTypeType',
        id: 1,
        type: 'Double'
      }
    };

    const mockRoomTypes = [
      { id: 1, type: 'Single' },
      { id: 2, type: 'Double' }
    ];

    service.updateRoomType(1, 'Double').subscribe((response) => {
      // @ts-ignore
      expect(response).toEqual(mockResponse.save);
      done();
    });

    const op = controller.expectOne(UpdateRoomTypeDocument);

    op.flush({
      data: {
        roomTypeMutation: mockResponse
      }
    });


    const refetchOp = controller.expectOne(RoomTypeListDocument);

    refetchOp.flush({
      data: {
        roomTypeList: mockRoomTypes
      }
    });

    expect(op.operation.variables).toEqual({ id: 1, type: 'Double' });
  });
});
