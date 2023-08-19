import React, { useContext, useState, useEffect, useRef } from "react";
import { ReviewService } from "../providers/ReviewService";
import { useNavigate, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

      //debug
      console.log('reviews', reviews);

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

      <div className="reviews_wrapper">
          <Container>
            <Row>
              { (reviews.length == 0) && <h5>No reviews yet</h5> }
              { reviews.map(review => (
                    <Col md={6}>
                      <div className="review">
                        <p className="region">{review.region}</p>
                        <p>{review.producer} {review.year}</p>
                        <p className="notes">{review.notes}</p>
                        <a href="#">Update</a>
                        <a href="#">Delete</a>
                      </div>
                    </Col>
                ))
              }
            </Row>
          </Container>
      </div>      
    </>
  );
};

export default CompilationView;
