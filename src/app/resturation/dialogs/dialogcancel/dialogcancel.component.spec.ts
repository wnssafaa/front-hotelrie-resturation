import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcancelComponent } from './dialogcancel.component';

describe('DialogcancelComponent', () => {
  let component: DialogcancelComponent;
  let fixture: ComponentFixture<DialogcancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogcancelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
