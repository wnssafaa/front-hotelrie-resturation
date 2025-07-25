import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { RoomTypeService } from "../../services/room-type.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.sass']
})
export class RoomTypeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'type', 'actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private roomTypeService: RoomTypeService, public router: Router) {}


  ngOnInit(): void {
    this.loadRoomTypes();}

  loadRoomTypes(): void {
    this.roomTypeService.getAllRoomTypes().subscribe(roomTypes => {
      this.dataSource = new MatTableDataSource(roomTypes);
      this.dataSource.paginator = this.paginator;});}


  editRoomType(roomType: any): void {
    const roomTypeId = roomType.id;
    this.router.navigate(['/hotelerie', 'room-type', roomTypeId]);}

  deleteRoomType(roomType: any): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le type de chambre ${roomType.type}?`)) {
      this.roomTypeService.deleteRoomType(roomType.id).subscribe({
        next: () => {
          this.loadRoomTypes();
        }, error: (error) => {
          console.error('Error deleting room type:', error);}});}
  }
  searchTerm: string = '';

  searchetypeCHAMBRE(searchTerm: string): void {
    if (searchTerm) {
      this.roomTypeService.searchtypechambre(searchTerm).subscribe(building => {
        this.dataSource.data = building;
      });
    } else {
      this.loadRoomTypes();
    }
  }
}
