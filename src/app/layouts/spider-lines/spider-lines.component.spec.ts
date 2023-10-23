import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderLinesComponent } from './spider-lines.component';

describe('SpiderLinesComponent', () => {
  let component: SpiderLinesComponent;
  let fixture: ComponentFixture<SpiderLinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiderLinesComponent]
    });
    fixture = TestBed.createComponent(SpiderLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
