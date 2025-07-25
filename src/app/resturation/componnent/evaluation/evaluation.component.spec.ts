import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationComponent } from './evaluation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgBusyModule} from "ng-busy";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
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
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../app.module";
import {RegimService} from "../../services/regim.service";
import {of} from "rxjs";

describe('EvaluationComponent', () => {
  let component: EvaluationComponent;
  let fixture: ComponentFixture<EvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations:[EvaluationComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
