import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularGameResultComponent } from './singular-game-result.component';

describe('SingularGameResultComponent', () => {
  let component: SingularGameResultComponent;
  let fixture: ComponentFixture<SingularGameResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingularGameResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularGameResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
