import { Component, OnInit, Input } from "@angular/core";
import { Review } from "../models/review.model";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"],
})
export class ReviewComponent {
  @Input() review: Review;

  constructor() {}

  ngOnInit() {}
}
