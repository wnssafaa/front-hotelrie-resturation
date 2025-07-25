import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.sass']
})
export class RoomListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'label', 'code', 'Etage', 'Pavillon', 'TypeChambre', 'NbrLit', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roomService: RoomService, public router: Router) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getAllChambres().subscribe({
      next: (rooms) => {
        this.dataSource.data = rooms;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error('Error fetching rooms:', error);
      }
    });
  }

  editRoom(room: any): void {
    const roomId = room.id;
    this.router.navigate(['/hotelerie', 'room', roomId]);
  }

  deleteRoom(room: any): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la chambre ${room.label}?`)) {
      this.roomService.deleteChambre(room.id).subscribe({
        next: () => {
          this.loadRooms();
        },
        error: (error) => {
          console.error('Error deleting room:', error);
        }
      });
    }
  }

  searchTerm: string = '';
  searchRoom(searchTerm: string): void {
    if (searchTerm) {
      this.roomService.searchRoomsByLabel(searchTerm).subscribe(rooms => {
        this.dataSource.data = rooms;
        this.dataSource.paginator = this.paginator;
      });
    } else {
      this.loadRooms();
    }
  }




}
