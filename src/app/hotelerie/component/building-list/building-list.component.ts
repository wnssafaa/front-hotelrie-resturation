import {Component, OnInit, ViewChild} from '@angular/core';
import { BuildingService } from '../../services/building.service';
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.sass']
})
export class BuildingListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'nom', 'actions'];

  dataSource = new MatTableDataSource<any,MatPaginator>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private buildingService: BuildingService,public router:Router) {}

  ngOnInit(): void {
    this.loadBuildings();
  }
  loadBuildings(): void {
    this.buildingService.getAllBatiments().subscribe({
      next: (buildings) => {
        this.dataSource.data= buildings;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error('Error fetching buildings:', error);
      }
    });
  }
  editbuilding(batiment: any): void {
    const batimentId = batiment.id;
    this.router.navigate(['/hotelerie', 'building', batimentId])

  }
  deleteBuilding(batiment: any): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le bâtiment ${batiment.nom}?`)) {
      this.buildingService.deleteBatiment(batiment.id).subscribe({
        next: () => {
          this.loadBuildings();
        },
        error: (error) => {
          console.error('Error deleting building:', error);
        }
      });
    }
  }

  searchTerm: string = '';
  searchbuilding(searchTerm: string): void {
    if (searchTerm) {
      this.buildingService.searchbatimentName(searchTerm).subscribe(building => {
        this.dataSource.data = building;
      });
    } else {
      this.loadBuildings();
    }
  }



}
