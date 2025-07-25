import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {EtageService} from "../../services/etage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrl: './floor-list.component.sass'
})
export class FloorListComponent {
  displayedColumns: string[] = ['id', 'nom', 'code','building', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any,MatPaginator>();
  constructor(private etageService: EtageService,public router:Router) {

  }

  ngOnInit(): void {
    this.loadEtages();
  }

  loadEtages(): void {
    this.etageService.getAllFloors().subscribe(etages => {
      this.dataSource = new MatTableDataSource(etages);
      this.dataSource.paginator = this.paginator;

    });
  }

  editEtage(etage: any): void {
    const etageId = etage.id;
    this.router.navigate(['/hotelerie', 'floor', etageId])

  }
  deleteEtage(etage: any): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le etage ${etage.nom}?`)) {
      this.etageService.deleteFloor(etage.id).subscribe({
        next: () => {
          this.loadEtages();
        },
        error: (error) => {
          console.error('Error deleting building:', error);
        }
      });
    }
  }

  searchTerm: string = '';
  searchFloor(searchTerm: string): void {
    if (searchTerm) {
      this.etageService.searchetageName(searchTerm).subscribe(building => {
        this.dataSource.data = building;
      });
    } else {
      this.loadEtages()
    }
  }




}

