import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { EtageComponent } from './etage.component';
import { BuildingService } from '../../services/building.service';
import { EtageService } from '../../services/etage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GraphqlModule } from '../../../graphql.module';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgBusyModule } from 'ng-busy';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../../../app.module';

fdescribe('EtageComponent', () => {
  let component: EtageComponent;
  let fixture: ComponentFixture<EtageComponent>;
  let buildingService: jasmine.SpyObj<BuildingService>;
  let etageService: jasmine.SpyObj<EtageService>;
  let router: Router;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(async () => {
    const buildingServiceSpy = jasmine.createSpyObj('BuildingService', ['getAllBatiments']);
    const etageServiceSpy = jasmine.createSpyObj('EtageService', ['getFloorById', 'createFloor', 'updateFloor']);

    activatedRouteStub = {
      params: of({ id: '1' })
    };

    await TestBed.configureTestingModule({
      declarations: [EtageComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatIconModule,
        MatTableModule,
        CommonModule,
        RouterModule,
        ApolloModule,
        HttpClientModule,
        GraphqlModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatPaginatorModule,
        NgBusyModule,
        MatDialogModule,
        NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
        RouterTestingModule
      ],
      providers: [
        { provide: BuildingService, useValue: buildingServiceSpy },
        { provide: EtageService, useValue: etageServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EtageComponent);
    component = fixture.componentInstance;
    buildingService = TestBed.inject(BuildingService) as jasmine.SpyObj<BuildingService>;
    etageService = TestBed.inject(EtageService) as jasmine.SpyObj<EtageService>;
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    buildingService.getAllBatiments.and.returnValue(of([]));
    etageService.getFloorById.and.returnValue(of({ id: 1, name: 'Etage 1', code: 'E1', building: { id: '1' }, description: 'description' }));
    etageService.createFloor.and.returnValue(of({ id: '1', name: 'Etage 1', code: 'E1', building: { id: '1' }, description: 'description' }));
    etageService.updateFloor.and.returnValue(of({ id: 1, name: 'Etage 1', code: 'E1', building: { id: '1' }, description: 'description' }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update existing etage on submit', () => {
    component.ngOnInit();
    const updatedEtage = { id: 1, name: 'Etage 1 Updated', code: 'E1U', building: '1', description: 'description' };
    component.etageForm.setValue(updatedEtage);
    component.onSubmit();
    expect(etageService.updateFloor).toHaveBeenCalledWith(1, 'Etage 1 Updated', 'E1U', 'description', { id: 1 });
  });

  it('should add new etage on submit', () => {
    component.ngOnInit();
    const newEtage = { id: '', name: 'Etage 1', code: 'E1', building: '1', description: 'description' };
    component.etageForm.setValue(newEtage);
    component.onSubmit();
    expect(etageService.createFloor).toHaveBeenCalledWith('Etage 1', 'E1', { id: 1 }, 'description');
  });

  it('should validate form', () => {
    component.ngOnInit();
    component.etageForm.setValue({ id: '', name: 'Etage 1', code: 'E1', building: '1', description: 'description' });
    expect(component.isFormValid()).toBeTrue();
  });
});
