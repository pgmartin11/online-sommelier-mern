import React, { useContext, useState, useEffect, useRef } from "react";
import { ReviewService } from "../providers/ReviewService";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Review from "../components/Review";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/compilation-view.scss";


const CompilationView = () => {
  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewService.listReviews()
    .then(response => response.json())
    .then(data => {
      setReviews(data);
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h2>Compiled Reviews</h2>
      <p>
        A wine's overall quality assessment is based on a comparison with recognized
        standards, both with respect to other wines in its price range and according
        to known factors pertaining to the region or vintage.
      </p>
      <p>
        Below are informal reviews from visitors to this site containing their overall
        observations and impressions after sampling a vintage.
      </p>

      <div className="compilation_wrapper">
        <Row>
          { (reviews.length == 0) && <h5>No reviews yet</h5> }
          { reviews.map((review, i) => (
                <Col key={`rev-${i}`} md={6}>
                  <Review {...review} />
                </Col>
            ))
          }
        </Row>
      </div>      
    </>
  );
}

export default CompilationView;
