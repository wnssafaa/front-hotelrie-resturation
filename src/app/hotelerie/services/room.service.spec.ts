import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { RoomService } from './room.service';
import {
  DeleteRoomDocument,
  GetRoomByIdDocument,
  RoomListDocument
} from '../component/room/room.generated';

fdescribe('RoomService', () => {
  let service: RoomService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [RoomService]
    });

    service = TestBed.inject(RoomService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch all rooms', (done) => {
    const mockRooms = [
      { id: 1, label: 'Room 1' },
      { id: 2, label: 'Room 2' }
    ];

    service.getAllChambres().subscribe((rooms) => {
      expect(rooms).toEqual(mockRooms);
      done();
    });

    const op = controller.expectOne(RoomListDocument);

    op.flush({
      data: {
        roomList: mockRooms
      }
    });

    expect(op.operation.variables).toEqual({});
  });
  /*it('should add a room', (done) => {
    const mockResponse = {
      __typename: 'RoomMutation',
      createRoom: {
        __typename: 'RoomType',
        id: 1,
        label: 'Room 1',
        code: 'R1',
        floorId: { id: 1 },
        wardId: { id: 1 },
        roomTypeId: { id: 1 },
        bedCpt: 2,
        status: 'Available',
        bedCode: 'B1',
        bedType: { id: 1 },
        bedName: 'Bed 1'
      }
    };

    const mockRooms = [
      { id: 1, label: 'Room 1' },
      { id: 2, label: 'Room 2' }
    ];

    service.addChambre({
      label: 'Room 1',
      code: 'R1',
      floor: 1,
      ward: 1,
      roomType: 1,
      bedCpt: 2,
      status: 'Available',
      bedCode: 'B1',
      bedType: 1,
      bedName: 'Bed 1'
    }).subscribe((response) => {
      expect(response).toEqual(mockResponse.createRoom);
      done();
    });

    const op = controller.expectOne(CreateRoomDocument);

    op.flush({
      data: {
        roomMutation: mockResponse
      }
    });

    const refetchOp = controller.expectOne(RoomListDocument);

    refetchOp.flush({
      data: {
        roomList: mockRooms
      }
    });

    expect(op.operation.variables).toEqual({
      label: 'Room 1',
      code: 'R1',
      floorId: { id: 1 },
      wardId: { id: 1 },
      roomTypeId: { id: 1 },
      bedCpt: 2,
      status: 'Available',
      bedCode: 'B1',
      bedType: { id: 1 },
      bedName: 'Bed 1'
    });
  });*/
  it('should delete a room', (done) => {
    const mockResponse = {
      __typename: 'RoomMutation',
      delete: true
    };

    const mockRooms = [
      { id: 1, label: 'Room 1' },
      { id: 2, label: 'Room 2' }
    ];

    service.deleteChambre('1').subscribe((response) => {
      expect(response).toEqual(mockResponse.delete);
      done();
    });

    const op = controller.expectOne(DeleteRoomDocument);

    op.flush({
      data: {
        roomMutation: mockResponse
      }
    });

    const refetchOp = controller.expectOne(RoomListDocument);

    refetchOp.flush({
      data: {
        roomList: mockRooms
      }
    });

    expect(op.operation.variables).toEqual({ id: '1' });
  });
  it('should fetch a room by ID', (done) => {
    const mockRoom = {
      __typename: 'RoomType',
      id: 1,
      label: 'Room 1'
    };

    service.getChambreById('1').subscribe((room) => {
      expect(room).toEqual(mockRoom);
      done();
    });

    const op = controller.expectOne(GetRoomByIdDocument);

    op.flush({
      data: {
        room: mockRoom
      }
    });

    expect(op.operation.variables).toEqual({ id: '1' });
  });


});
