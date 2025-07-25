import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import { MatTableDataSource } from '@angular/material/table';
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrl: './list-menu.component.sass'
})
export class ListMenuComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id','titre', 'repas','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private menuService: MenuService,
              private router: Router,

              ) { }

  ngOnInit(): void {
    this.loadMenus();
  }
  loadMenus(): void {
    this.menuService.getMenus().subscribe(menus => {
      this.dataSource.data = menus;
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteMenu(menuId: string): void {
    this.menuService.deleteMenu(menuId).subscribe(() => {
      this.loadMenus();
    }, (error) => {
      console.error('Erreur lors de la suppression de cette menu :', error);
    });
  }

  searchTerm: string = '';
  searchByTitre(): void {
    if (this.searchTerm) {
      this.menuService.searchMenusByTitre(this.searchTerm).subscribe(menus => {
        if (menus.length > 0) {
          this.dataSource.data = menus;
          this.dataSource.paginator = this.paginator;
        }
      });
    } else {

      this.loadMenus();
    }
  }
  editmenu(menu: any): void {
    const menuId =menu.id;
    this.router.navigate(['/resturation', 'menu', menuId])
      .then(() => {
      });
  }
  cancelmenus(menu: any): void {
    const menuAvecMeals = {
      ...menu,
      mealIds: menu.mealIds
    };
menuAvecMeals.isCanceled=true
    this.menuService.cancelMenu(menuAvecMeals).subscribe(() => {
      this.loadMenus();
    });
  }



}
