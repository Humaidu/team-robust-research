import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhanaMapComponent } from './ghana-map.component';

describe('GhanaMapComponent', () => {
  let component: GhanaMapComponent;
  let fixture: ComponentFixture<GhanaMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhanaMapComponent]
    });
    fixture = TestBed.createComponent(GhanaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
