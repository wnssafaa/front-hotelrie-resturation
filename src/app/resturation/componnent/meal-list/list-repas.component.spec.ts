import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { ListRepasComponent } from './list-repas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RepasService } from '../../services/repas.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {Apollo, ApolloModule} from "apollo-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GraphqlModule} from "../../../graphql.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../app.module";

fdescribe('ListRepasComponent', () => {
  let component: ListRepasComponent;
  let fixture: ComponentFixture<ListRepasComponent>;
  let repasService: RepasService;

  beforeEach(async () => {
    const repasServiceSpy = jasmine.createSpyObj('RepasService', ['deleteRepas','getRepas']);

    await TestBed.configureTestingModule({
      declarations: [ListRepasComponent],
      imports: [
        ReactiveFormsModule, FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatRadioModule, MatIconModule, MatTableModule,
        RouterLink, RouterLinkActive, RouterModule, ApolloModule, HttpClientModule, GraphqlModule, MatListModule, MatSidenavModule, MatToolbarModule,
        MatSelectModule, MatPaginatorModule, MatCardModule, MatMenuTrigger, MatMenuModule, NoopAnimationsModule,RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [
         RepasService,
        Apollo,
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();
    repasService = TestBed.inject(RepasService) as jasmine.SpyObj<RepasService>;
    fixture = TestBed.createComponent(ListRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to repas edit page when editrepas is called', () => {
    const mockRepas = {
      id: '1',
      type: '',
      label: '',
      prix: '',
      calorie: '',
      disponibilety: '',
      regime: '',
      suplement: '',
      belief: '',
      photo: '',
      iscanceled: false
    };
    const navigateSpy = spyOn(component['router'], 'navigate').and.returnValue(Promise.resolve(true));

    component.editRepas(mockRepas);

    expect(navigateSpy).toHaveBeenCalledWith(['/resturation', 'meal', mockRepas.id]);
  });


  it('should cancel an repas', () => {
    const mockRepas = {
      id:'1',
      type: '',
      label: '',
      prix: '',
      calorie: '',
      disponibilety: '',
      regime: '',
      suplement: '',
      belief: '',
      photo:'',
      iscanceled: false
    };
    component.cancelrepas(mockRepas);

    expect(!mockRepas.iscanceled).toBeTruthy();
  });




});
