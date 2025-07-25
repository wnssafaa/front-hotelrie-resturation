import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListMenuComponent } from './list-menu.component';
import {Apollo, ApolloModule} from "apollo-angular";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { createTranslateLoader} from "../../../app.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";

fdescribe('ListMenuComponent', () => {
  let component: ListMenuComponent;
  let fixture: ComponentFixture<ListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     declarations:[ListMenuComponent],
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
      providers:[Apollo, { provide: ActivatedRoute, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
