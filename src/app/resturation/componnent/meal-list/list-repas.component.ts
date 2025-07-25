import { Component, OnInit, ViewChild } from '@angular/core';
import { RepasService } from '../../services/repas.service';
import { Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-repas',
  templateUrl: './list-repas.component.html',
  styleUrls: ['./list-repas.component.sass']
})
export class ListRepasComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'type', 'label', 'prix', 'calorie','régime','action'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public repasService: RepasService, public router: Router) {
  }

  ngOnInit(): void {
   this.loadRepas()

  }

  loadRepas(): void {
    this.repasService.getRepas().subscribe(repas => {
      this.dataSource.data = repas;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteRepass(regimeId: string): void {
    this.repasService.deleteRepas(regimeId).subscribe(() => {
      this.loadRepas();
    });
  }

  editRepas(repas: any): void {
    this.router.navigate(['/resturation', 'meal', repas.id]);
  }

  searchTerm: string = '';
  searchByLabel(searchTerm: string): void {
   if (searchTerm) {
      this.repasService.searchMealByLabel(searchTerm).subscribe(regimes => {
        this.dataSource.data = regimes;
      });
    } else {
      this.loadRepas();
    }
  }


  cancelrepas(repas: any): void {
    const repasAvecDiet = {
      ...repas,
      dietId: repas.dietId
    };

    this.repasService.cancelRepas(repasAvecDiet).subscribe(() => {
      this.loadRepas();
    });
  }


}
