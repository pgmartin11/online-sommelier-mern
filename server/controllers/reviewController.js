const Review = require("../models/reviewModel");

class ReviewService {
  static create(reviewData) {
    const review = new Review(reviewData);
    return review.save();
  }

  static read(reviewId) {
    return Review.findById(reviewId).then((review) => {
      return review;
    });
  }

  static update(reviewId, reviewData) {
    return Review.findOne({ _id: reviewId }).then((review) => {
      review.set(reviewData);
      review.save();
      return review;
    });
  }

  static delete(reviewId) {
    return Review.findOneAndDelete({ _id: reviewId }).then((review) => {
      return review;
    });
  }

  static list() {
    return Review.find({}).then((reviews) => {
      return reviews;
    });
  }
}

module.exports.ReviewService = ReviewService;
