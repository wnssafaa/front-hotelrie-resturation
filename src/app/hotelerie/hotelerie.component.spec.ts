import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelerieComponent } from './hotelerie.component';

describe('HotelerieComponent', () => {
  let component: HotelerieComponent;
  let fixture: ComponentFixture<HotelerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
