import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.sass']
})
export class ListIngredientComponent implements OnInit {
  displayedColumns: string[] = ['id','nom', 'prix', 'unitprice', 'fournisseur','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private ingredientService: IngredientService,public router: Router, private translateService: TranslateService,
              private http: HttpClient,) {
    translateService.setDefaultLang('en');
    translateService.use('en');

  }
  busy!: Promise<any>;

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.ingredientService.getIngredients().subscribe(
      ingredients => {
        this.dataSource = new MatTableDataSource(ingredients.map(ingredient => ({
          ...ingredient,
        })));
        this.dataSource.paginator = this.paginator;

      },
      error => {
        console.log('Une erreur est survenue lors du chargement des ingrédients : ', error);
      }
    );
  }
  deleteIngredient(ingredient: any): void {
    this.ingredientService.deleteIngredient(ingredient.id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(item => item.id !== ingredient.id);
      this.dataSource.paginator = this.paginator;
    });
  }
  editIngredient(ingredient: any): void {
    const ingredientId = ingredient.id;
    this.router.navigate(['/resturation', 'ingredient', ingredientId])
      .then(() => {
      });
  }
  searchTerm: string = '';
  filteredIngredients: any[] = [];
  searchBynom(searchTerm: string): void {
    if (searchTerm) {
      this.ingredientService.searchIngredientsByName(searchTerm).subscribe(ingredients => {
        this.dataSource.data = ingredients;
      });}
    else {
      this.loadIngredients();
  }}
  cancelIngredient(ingredient: any): void {
    this.ingredientService.cancelIngredient(ingredient).subscribe(() => {
      this.loadIngredients();
    });}

}
