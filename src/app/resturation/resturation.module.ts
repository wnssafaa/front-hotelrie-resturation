import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegimeComponent} from "./componnent/diet/regime.component";
import {DialogajouterComponent} from "./dialogs/dialogajouter/dialogajouter.component";
import {DialogmodifierComponent} from "./dialogs/dialogmodifier/dialogmodifier.component";
import {ListRecetteComponent} from "./componnent/recipe-list/list-recette.component";
import {RecetteComponent} from "./componnent/recipe/recette.component";
import {IngredientComponent} from "./componnent/ingredient/ingredient.component";
import {ListregimComponent} from "./componnent/diet-list/listregim.component";
import {RepasComponent} from "./componnent/meal/repas.component";
import {ListRepasComponent} from "./componnent/meal-list/list-repas.component";
import {MenuComponent} from "./componnent/menu/menu.component";
import {ListMenuComponent} from "./componnent/menu-list/list-menu.component";
import {ListIngredientComponent} from "./componnent/ingredient-list/list-ingredient.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InstanceConfigHolderService, NgBusyModule} from "ng-busy";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {RouterLink, RouterLinkActive, RouterModule, Routes} from "@angular/router";
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpLink} from "apollo-angular/http";
import {InMemoryCache} from "@apollo/client/core";
import {createTranslateLoader} from "../app.module";
import {ResturationComponent} from "./resturation.component";
import {CommandeComponent} from "./componnent/commande/commande.component";
import {CommandeListComponent} from "./componnent/commande-list/commande-list.component";
import {DialogconfirmComponent} from "./dialogs/dialogconfirm/dialogconfirm.component";
import {DialogsupdateComponent} from "./dialogs/dialogsupdate/dialogsupdate.component";
import {DialogcancelComponent} from "./dialogs/dialogcancel/dialogcancel.component";
import {NotificationsComponent} from "./componnent/notifications/notifications.component";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from "@angular/material/tabs";
import {EvaluationComponent} from "./componnent/evaluation/evaluation.component";
import {HotelerieComponent} from "../hotelerie/hotelerie.component";
const routes: Routes = [
  { path: '', component:ResturationComponent,
    children:[
      { path: 'ingredient', component:IngredientComponent },
      { path: 'ingredient/:id', component:IngredientComponent },
      { path: 'ingredient-list', component: ListIngredientComponent},
      { path: 'recipe', component:RecetteComponent},
      { path: 'recipe-list', component:ListRecetteComponent },
      { path: 'recipe/:id', component:RecetteComponent},
      { path: 'diet', component:RegimeComponent },
      { path: 'diet/:id', component:RegimeComponent },
      { path: 'diet-list', component:ListregimComponent },
      { path: 'meal', component:RepasComponent },
      { path: 'meal/:id', component:RepasComponent },
      { path: 'meal-list', component:ListRepasComponent },
      { path: 'menu', component:MenuComponent },
      { path: 'menu/:id', component:MenuComponent },
      { path: 'menu-list', component:ListMenuComponent },
      { path: 'commande', component:CommandeComponent },
      { path: 'commande/:id', component:CommandeComponent },
      { path: 'commande-list', component:CommandeListComponent },
      { path: 'notification', component:NotificationsComponent },
      { path: 'Evaluation', component:EvaluationComponent },
      { path: 'Evaluation/:id', component:EvaluationComponent },

    ]
    ,},
  { path: 'hotelerie', component:HotelerieComponent},

  { path: '', redirectTo: 'resturation/ingredient-list', pathMatch: 'full' }
];

@NgModule({
  declarations: [DialogcancelComponent,NotificationsComponent,EvaluationComponent,CommandeListComponent,DialogsupdateComponent,CommandeComponent,DialogconfirmComponent,RegimeComponent,DialogajouterComponent,DialogmodifierComponent,ListRecetteComponent,RecetteComponent,IngredientComponent,ListregimComponent,RepasComponent,ListRepasComponent,MenuComponent,ListMenuComponent,ListIngredientComponent],
  imports: [FormsModule,NgBusyModule,MatDialogModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatRadioModule,MatIconModule,MatTableModule,
    CommonModule,RouterLink,RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule,MatListModule,MatSidenavModule,MatToolbarModule,MatStepperModule,MatTabsModule,
    MatSelectModule ,MatPaginatorModule,MatCardModule, MatMenuTrigger,MatMenuModule,MatProgressBarModule,RouterModule.forChild(routes),MatCheckboxModule,MatBadgeModule, MatBadgeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    HttpClient,
    TranslateService,
    InstanceConfigHolderService,

    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri:'http://127.0.0.1:8000/graphql',
          }),
        };
      },
      deps: [HttpLink],

    },
  ],

})
export class ResturationModule { }
