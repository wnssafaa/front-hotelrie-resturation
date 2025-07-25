import { Component, OnInit ,ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RegimService } from '../../services/regim.service';
import {Router} from "@angular/router";
import { MatPaginator } from '@angular/material/paginator';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-listregim',
  templateUrl: './listregim.component.html',
  styleUrls: ['./listregim.component.sass']
})
export class ListregimComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id','code', 'description', 'label', 'action'];
  dataSource = new MatTableDataSource<any>();

  constructor(public regimService: RegimService,
              public router: Router) {}

  ngOnInit(): void {
    this.loadRegimes()

  }


  loadRegimes(): void {
    this.regimService.getRegimes().subscribe(regimes => {
      this.dataSource.data = regimes;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteRegime(regimeId: string): void {
    const id = parseInt(regimeId, 10);
    if (!isNaN(id)) {
      this.regimService.deleteRegime(id).subscribe(() => {
        this.loadRegimes();
      });
    } else {
      console.error('Invalid regime ID');
    }
  }


  searchTerm: string = '';
  searchByCode(searchTerm: string): void {
    if (searchTerm) {
      this.regimService.searchRegimeByCode(searchTerm).subscribe(regimes => {
        this.dataSource.data = regimes;
      });}
     else {
      this.loadRegimes();
    }}


  editregime(regime: any): void {
    const regimeId = regime.id;
    this.router.navigate(['/resturation', 'diet', regimeId])
      .then(() => {
      });
  }
  cancelregime(regime: any): void {
    this.regimService.cancelregime(regime).subscribe(() => {
      this.loadRegimes();
    });
  }


}
