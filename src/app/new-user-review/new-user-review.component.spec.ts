import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserReviewComponent } from './new-user-review.component';

describe('NewUserReviewComponent', () => {
  let component: NewUserReviewComponent;
  let fixture: ComponentFixture<NewUserReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
