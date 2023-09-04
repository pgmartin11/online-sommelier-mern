import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../constants";
import "../scss/review.scss";


const Review = ({ _id, region, producer, year, notes }) => (
    <div className="review">
      <p className="region">{region}</p>
      <p>{producer} {year}</p>
      <p className="notes">{notes}</p>
      <Link to="#">Update</Link>
      <Link to={PATHS.DELETE(_id)}>Delete</Link>
    </div>
)

export default Review;
