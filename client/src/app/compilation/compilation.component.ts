import { Component, OnInit, Input } from "@angular/core";
import { Review } from "../models/review.model";
import { ReviewService } from "../providers/review.service";

@Component({
  selector: "app-compilation",
  templateUrl: "./compilation.component.html",
  styleUrls: ["./compilation.component.css"],
})
export class CompilationComponent implements OnInit {
  // holds all retrieved reviews
  reviewList: Array<Review> = [];

  // inject our registered service
  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    // fetch all reviews
    this.reviewService.listReviews().subscribe((reviews) => {
      this.reviewList = reviews;
    });
  }
}
