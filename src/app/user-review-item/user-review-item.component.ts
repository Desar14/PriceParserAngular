import { Component, Input, OnInit } from '@angular/core';
import { UserReview } from 'src/models/userReview';
@Component({
  selector: 'app-user-review-item',
  templateUrl: './user-review-item.component.html',
  styleUrls: ['./user-review-item.component.scss']
})
export class UserReviewItemComponent implements OnInit {

  constructor() { }

  @Input() userReview? : UserReview;

  ngOnInit(): void {
  }

}
