import React from "react";
import { Link } from "react-router-dom";
import "../scss/review.scss";


const Review = ({ _id, region, producer, year, notes }) => (
    <div className="review">
      <p className="region">{region}</p>
      <p>{producer} {year}</p>
      <p className="notes">{notes}</p>
      <Link to="#">Update</Link>
      <Link to="#">Delete</Link>
    </div>
)

export default Review;
