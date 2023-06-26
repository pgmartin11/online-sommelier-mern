import { Component } from "@angular/core";
import { ReviewService } from "../providers/review.service";
import { Review } from "../models/review.model";

interface valueTypes {
  regionField: string,
  producerField: string,
  yearField: string,
  notesField: string
}

interface formObj {
  value: valueTypes,
  reset: any
}

@Component({
  selector: "app-new-review",
  templateUrl: "./new-review.component.html",
  styleUrls: ["./new-review.component.css"],
})
export class NewReviewComponent {
  // holds review object populated by createReview,
  // initial values set to quiet errors
  review: Review = {
    region: "",
    producer: "",
    year: "",
    notes: ""
  };

  constructor(private reviewService: ReviewService) {}

  // create
  createReview(form: formObj): void {
    // set the review properties from the form properties
    this.review.region = form.value.regionField;
    this.review.producer = form.value.producerField;
    this.review.year = form.value.yearField;
    this.review.notes = form.value.notesField;

    this.reviewService
      .createReview(this.review)
      .subscribe((review) => form.reset());
  }
}
