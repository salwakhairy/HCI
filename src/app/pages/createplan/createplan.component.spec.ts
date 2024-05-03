import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanComponent } from './createplan.component';

describe('CreateplanComponent', () => {
  let component: CreatePlanComponent;
  let fixture: ComponentFixture<CreatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
