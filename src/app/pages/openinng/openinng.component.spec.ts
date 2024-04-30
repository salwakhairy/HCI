import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeninngComponent } from './openinng.component';

describe('OpeninngComponent', () => {
  let component: OpeninngComponent;
  let fixture: ComponentFixture<OpeninngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpeninngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpeninngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
