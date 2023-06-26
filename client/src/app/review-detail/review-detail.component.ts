import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReviewService } from "../providers/review.service";
import { Review } from "../models/review.model";

interface formData {
    regionField: string,
    producerField: string,
    yearField: string,
    notesField: string
}

@Component({
  selector: "app-review-detail",
  templateUrl: "./review-detail.component.html",
  styleUrls: ["./review-detail.component.css"],
})
export class ReviewDetailComponent implements OnInit {
  // holds review object fetched from ReviewService
  review: Review = {
    region: "",
    producer: "",
    year: "",
    notes: ""
  };

  // set to true if we are deleting the component, assume an update operation
  toDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.getReview();
  }

  // fetch review
  getReview(): void {
    // id of the review to retrieve
    const id: string = this.route.snapshot.paramMap.get("id");

    // test if we are deleting or updating and set toDelete appropriately
    this.toDelete = this.route.snapshot.routeConfig.path.includes("delete");

    this.reviewService.getReview(id).subscribe((review) => {
      this.review = review;
    });
  }

  // update retrieved review using data passed from ngForm.value
  updateReview(formObj: formData): void {
    // update the review properties from the form
    this.review.region = formObj.regionField;
    this.review.producer = formObj.producerField;
    this.review.year = formObj.yearField;
    this.review.notes = formObj.notesField;

    // call the reviewService update method
    this.reviewService
      .updateReview(this.review._id, this.review)
      .subscribe((result) => {
        location.reload();
      });
  }

  // delete retrieved review
  deleteReview(): void {
    this.reviewService.deleteReview(this.review._id).subscribe((result) => {
      this.router.navigate(["/reviews"]);
    });
  }
}
