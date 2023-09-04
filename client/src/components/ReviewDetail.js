import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { ReviewService } from "../providers/ReviewService";
import Container from "react-bootstrap/Container";
import Review from "../components/Review";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PATHS } from "../constants";
import "../scss/review-detail.scss";


const ReviewDetail = () => {
  let [review, setReview] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    ReviewService.getReview(id)
    .then(response => response.json())
    .then(data => {
      setReview(data);
    })
    .catch(err => console.error(err));
  }, []);

  const delReview = () => {
    ReviewService.deleteReview(id)
    .then(result => {
      navigate(PATHS.LIST);
    })
    .catch(err => console.error(err));
  }

  return (
    <>
      <h2>Delete Review</h2>

      { !review && <h5>Loading...</h5> }
      { review && (
        <div className="row reviews_wrapper">
            <div className="col-md-12">
              <h4>Delete this review?</h4>
              <p className="region">{ review.region }</p>
              <p>{ review.producer } { review.year }</p>
              <p className="notes">{ review.notes }</p>
            </div>
            <div className="col-md-6">
              <button className="delete-submit" onClick={delReview}>Delete</button>
              <Link className="delete-cancel" to={PATHS.LIST}>Cancel</Link>
            </div>
        </div>  
      )} 
    </>
  );
}

export default ReviewDetail;
