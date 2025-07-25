import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommandService} from "../../services/command.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";



@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrl: './commande-list.component.sass'
})
export class CommandeListComponent  implements  AfterViewInit{
  displayedColumns: string[] = ['id', 'patient','repas','date', 'status' ,'actions'];
  dataSource = new MatTableDataSource<any,MatPaginator>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private commandeService: CommandService,public router:Router,private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.loadCommandes();
  }
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
  }

  isLoading = true;
  loadCommandes(): void {
    this.isLoading = true;
    this.commandeService.getAllCommandes().subscribe(commandes => {
    setTimeout(() => {
        this.dataSource.data = commandes;
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      }, 1000);
    });

  }
  editcommande(commande: any): void {
    const commandeId = commande.id;
    this.router.navigate(['/resturation', 'commande', commandeId])
      .then(() => {
      });
  }


  searchTerm: string = '';
  searchByPatient(searchTerm: string): void {
    if (searchTerm) {
      this.commandeService.searchcommandeBypatient(searchTerm).subscribe(patients => {
        this.dataSource.data = patients;
      });
    } else {
      this.loadCommandes();
    }
  }
  afficherTicket: boolean = false;
  selectedCommande: any = null;
  ticketcommande(commande: any): void {
    this.afficherTicket = true;
    this.selectedCommande = commande;
    console.log(commande)
  }
  imprimerTicket(): void {
    window.print();
  }
  openEvaluationForm(commande: any): void {
    this.router.navigate(['/resturation', 'Evaluation'], { queryParams: { id:commande.id } });
  }

}
