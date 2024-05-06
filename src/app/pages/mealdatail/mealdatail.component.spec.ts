import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealdatailComponent } from './mealdatail.component';

describe('MealdatailComponent', () => {
  let component: MealdatailComponent;
  let fixture: ComponentFixture<MealdatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealdatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealdatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
