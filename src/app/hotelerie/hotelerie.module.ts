import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuildingComponent} from "./component/building/building.component";
import {RouterLink, RouterLinkActive, RouterModule, Routes} from "@angular/router";
import {HotelerieComponent} from "./hotelerie.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgBusyModule} from "ng-busy";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBadgeModule} from "@angular/material/badge";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../app.module";
import {BuildingListComponent} from "./component/building-list/building-list.component";
import {DeleteComponent} from "./dialogs/delete/delete.component";
import {EtageComponent} from "./component/floor/etage.component";
import {FloorListComponent} from "./component/floor-list/floor-list.component";
import {ResturationComponent} from "../resturation/resturation.component";
import {BedTypeComponent} from "./component/bed-type/bed-type.component";
import {BedTypeListComponent} from "./component/bed-type-list/bed-type-list.component";
import {WardComponent} from "./component/ward/ward.component";
import {WardListComponent} from "./component/ward-list/ward-list.component";
import {RoomTypeComponent} from "./component/room-type/room-type.component";
import {RoomTypeListComponent} from "./component/room-type-list/room-type-list.component";
import {RoomComponent} from "./component/room/room.component";
import {RoomListComponent} from "./component/room-list/room-list.component";

const routes: Routes = [
  {
    path: '', component: HotelerieComponent,
    children: [
      { path: 'building', component: BuildingComponent },
      { path: 'building/:id', component: BuildingComponent },
      { path: 'building-list', component:BuildingListComponent },
      { path: 'floor', component:EtageComponent },
      { path: 'floor/:id', component:EtageComponent},
      { path: 'floor-list', component:FloorListComponent},
      { path: 'bed-type', component:BedTypeComponent },
      { path: 'bed-type/:id', component:BedTypeComponent },
      { path: 'bed-list', component:BedTypeListComponent },
      { path: 'ward', component:WardComponent},
      { path: 'ward/:id', component:WardComponent},
      { path: 'ward-list', component:WardListComponent},
      { path: 'room-type', component:RoomTypeComponent},
      { path: 'room-type/:id', component:RoomTypeComponent},
      { path: 'room-type-list', component:RoomTypeListComponent},
      { path: 'room', component:RoomComponent},
      { path: 'room/:id', component:RoomComponent},
      { path: 'room-list', component:RoomListComponent}
    ]
  },
  { path: 'restauration', component:ResturationComponent},
  { path: '', redirectTo: 'building', pathMatch: 'full' }
];


@NgModule({
  declarations: [BuildingComponent,RoomListComponent,RoomComponent,RoomTypeListComponent,RoomTypeComponent,BuildingListComponent,DeleteComponent,EtageComponent,FloorListComponent,BedTypeComponent,BedTypeListComponent,WardComponent,WardListComponent],
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
})
export class HotelerieModule { }
