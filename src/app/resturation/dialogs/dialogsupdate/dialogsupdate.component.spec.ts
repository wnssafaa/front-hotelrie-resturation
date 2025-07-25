import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsupdateComponent } from './dialogsupdate.component';

describe('DialogsupdateComponent', () => {
  let component: DialogsupdateComponent;
  let fixture: ComponentFixture<DialogsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogsupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
