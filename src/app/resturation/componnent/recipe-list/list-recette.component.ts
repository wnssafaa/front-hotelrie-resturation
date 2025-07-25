import {Component, OnInit, ViewChild} from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  templateUrl: './list-recette.component.html',
  styleUrls: ['./list-recette.component.sass']
})
export class ListRecetteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'categorie', 'valeurProduction', 'uniteProduction', 'actions'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public recetteService: RecetteService,public router: Router) {

  }
  ngOnInit(): void {
    this.loadRecettes();
  }

  getRecettes(): void {
    this.recetteService.getRecettes().subscribe(recettes => {
      this.dataSource = new MatTableDataSource(recettes);
      this.dataSource.paginator = this.paginator;

    });
  }

  loadRecettes(): void {
    this.recetteService.getRecettes().subscribe(recettes => {
      this.dataSource = new MatTableDataSource(recettes);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteRecette(recetteId: string): void {
    const deleteRecetteObservable = this.recetteService.deleteRecette(recetteId);
    if (deleteRecetteObservable) {
      deleteRecetteObservable.subscribe(() => {
        this.loadRecettes()
      }, (error) => {
        console.error('Erreur lors de la suppression de la recette :', error);
      });
    } else {
      console.error('La méthode deleteRecette de RecetteService renvoie undefined.');
    }
   this.router.navigate(['/resturation', 'recipe-list', recetteId])
  }

  searchTerm: string = '';
  editRecette(recette: any): void {
    const recetteId = recette.id;
    this.router.navigate(['/resturation', 'recipe', recetteId])
      .then(() => {
      });
  }


  cancelrecette(recette: any): void {
    this.recetteService.cancelRecette(recette).subscribe(() => {
      this.loadRecettes();})
  }
  searchRecettes(name: string): void {
    this.recetteService.searchRecipesByName(name).subscribe(Meals => {
      this.dataSource = new MatTableDataSource(Meals);
      this.dataSource.paginator = this.paginator;
    });
  }
}
