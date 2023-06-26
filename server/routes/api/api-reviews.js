const express = require("express");
const router = express.Router();
const { validate_form } = require("../../utils/helpers");
const Review = require("../../models/reviewModel");
const reviewController = require("../../controllers/reviewController");
const ReviewService = reviewController.ReviewService;

// from Module 9 lecture notes
router.use((req, res, next) => {
  res.set({
    // allow any domain, allow REST methods we've implemented
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers",
    // Set content-type for all api requests
    "Content-type": "application/json",
  });
  if (req.method == "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// list
router.get("/", (req, res, next) => {
  ReviewService.list()
    .then((reviews) => {
      res.status(200);
      res.json(reviews);
    })
    .catch((err) => {
      res.status(404);
      res.end();
    });
});

// create
router.post("/", (req, res, next) => {
  let reviewData = req.body;

  // perform form validation
  const isOk = validate_form(reviewData);
  if (!isOk) {
    throw new Error("ReviewValidationError", reviewData);
  }

  // form is ok, save to the database
  ReviewService.create(reviewData)
    .then((review) => {
      res.status(201);
      res.json(review);
    })
    .catch((err) => {
      res.status(400);
      res.end();
    });
});

// find one
router.get("/:reviewid", (req, res, next) => {
  ReviewService.read(req.params.reviewid)
    .then((review) => {
      res.status(200);
      res.json(review);
    })
    .catch((err) => {
      res.status(404);
      res.end();
    });
});

// update
router.put("/:reviewid", (req, res, next) => {
  ReviewService.update(req.params.reviewid, req.body)
    .then((updatedReview) => {
      res.status(200);
      res.json(updatedReview);
    })
    .catch((err) => {
      res.status(404);
      res.end();
    });
});

// delete
router.delete("/:reviewid", (req, res, next) => {
  ReviewService.delete(req.params.reviewid)
    .then((review) => {
      res.status(200);
      res.json(review);
    })
    .catch((err) => {
      res.status(404);
      res.end();
    });
});

// error handler
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.end();
});

module.exports = router;
