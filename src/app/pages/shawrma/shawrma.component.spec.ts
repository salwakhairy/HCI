import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShawrmaComponent } from './shawrma.component';

describe('ShawrmaComponent', () => {
  let component: ShawrmaComponent;
  let fixture: ComponentFixture<ShawrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShawrmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShawrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
