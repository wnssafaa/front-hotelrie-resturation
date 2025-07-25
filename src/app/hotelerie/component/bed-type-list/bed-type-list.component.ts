import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { BedTypeService } from "../../services/bed-type.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-bed-type-list',
  templateUrl: './bed-type-list.component.html',
  styleUrls: ['./bed-type-list.component.sass']
})
export class BedTypeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'label', 'actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private bedTypeService: BedTypeService, public router: Router) {}

  ngOnInit(): void {
    this.loadBedTypes();
  }

  loadBedTypes(): void {
    this.bedTypeService.getAllBedTypes().subscribe(bedTypes => {
      this.dataSource = new MatTableDataSource(bedTypes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editBedType(bedType: any): void {
    const bedTypeId = bedType.id;
    this.router.navigate(['/hotelerie', 'bed-type', bedTypeId]);
  }

  deleteBedType(bedType: any): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le type de lit ${bedType.label}?`)) {
      this.bedTypeService.deleteBedType(bedType.id).subscribe({
        next: () => {
          this.loadBedTypes();
        },
        error: (error) => {
          console.error('Error deleting bed type:', error);
        }
      });
    }
  }
  searchTerm: string = '';
  searchetypelit(searchTerm: string): void {
    if (searchTerm) {
      this.bedTypeService.searchtypelit(searchTerm).subscribe(building => {
        this.dataSource.data = building;
      });
    } else {
      this.loadBedTypes();
    }
  }

}
