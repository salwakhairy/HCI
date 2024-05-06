import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzamealComponent } from './pizzameal.component';

describe('PizzamealComponent', () => {
  let component: PizzamealComponent;
  let fixture: ComponentFixture<PizzamealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzamealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzamealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
