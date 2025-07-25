import { Component, OnInit, ViewChild } from '@angular/core';
import { WardService } from '../../services/ward.service';
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-ward-list',
  templateUrl: './ward-list.component.html',
  styleUrls: ['./ward-list.component.sass']
})
export class WardListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'nom', 'isprivate', 'actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private wardService: WardService, public router: Router) { }

  ngOnInit(): void {
    this.loadWards();
  }

  loadWards(): void {
    this.wardService.getAllWards().subscribe({
      next: (wards) => {
        this.dataSource.data = wards;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error('Error fetching wards:', error);
      }
    });
  }

  editWard(ward: any): void {
    const wardId = ward.id;
    this.router.navigate(['/hotelerie', 'ward', wardId]);
  }

  deleteWard(ward: any): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le pavillon ${ward.nom}?`)) {
      this.wardService.deleteWard(ward.id).subscribe({
        next: () => {
          this.loadWards();
        },
        error: (error) => {
          console.error('Error deleting ward:', error);
        }
      });
    }
  }


  searchTerm: string = '';
  searchWard(searchTerm: string): void {
    if (searchTerm) {
      this.wardService.searchWardByName(searchTerm).subscribe(WARD => {
        this.dataSource.data = WARD;
      });
    } else {
      this.loadWards()
    }
  }

}
