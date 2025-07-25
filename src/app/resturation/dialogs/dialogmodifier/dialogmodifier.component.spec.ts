import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmodifierComponent } from './dialogmodifier.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../app.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

describe('DialogmodifierComponent', () => {
  let component: DialogmodifierComponent;
  let fixture: ComponentFixture<DialogmodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[DialogmodifierComponent],
      imports: [ReactiveFormsModule,FormsModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatRadioModule,MatIconModule,MatTableModule,
        CommonModule,RouterLink,RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule,MatListModule,MatSidenavModule,MatToolbarModule,
        MatSelectModule ,MatPaginatorModule,MatCardModule, MatMenuTrigger,MatMenuModule,NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Vous pouvez fournir une instance vide pour les besoins de test
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Assurez-vous d'importer MAT_DIALOG_DATA de @angular/material/dialog
        // Autres fournisseurs nécessaires
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogmodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
