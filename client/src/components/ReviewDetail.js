import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import { useInput } from "../hooks";
import { ReviewService } from "../providers/ReviewService";
import Container from "react-bootstrap/Container";
import Review from "../components/Review";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddReviewForm from "../components/AddReviewForm";
import { PATHS } from "../constants";
import "../scss/review-detail.scss";


const InnerReviewDetail = ({_id: id, region: propRegion, producer: propProducer, year: propYear, notes: propNotes, toDelete=false}) => {
  const navigate = useNavigate();
  
  // for update
  const [region, resetRegion] = useInput(propRegion);
  const [producer, resetProducer] = useInput(propProducer);
  const [year, resetYear] = useInput(propYear);
  const [notes, resetNotes] = useInput(propNotes);

  const delReview = () => {
    ReviewService.deleteReview(id)
    .then(result => {
      navigate(PATHS.LIST);
    })
    .catch(err => console.error(err));
  }

  const updateReview = (e) => {
    e.preventDefault();
    const reviewData = {
      region: region.value,
      producer: producer.value,
      year: year.value,
      notes: notes.value
    };
    ReviewService.updateReview(id, reviewData)
    .then(result => {
      // setFormData(reviewData);
    })
    .catch(err => console.error(err));
  }

  if (toDelete) {
    return (
      <>
        <h2>Delete Review</h2>
        <div className="reviews_wrapper">
          <Container>
            <Row>
              <Col md={12}>
                <h4>Delete this review?</h4>
                <p className="region">{ region.value }</p>
                <p>{ producer.value } { year.value }</p>
                <p className="notes">{ notes.value }</p>
              </Col>
              <Col md={6}>
                <button className="delete-submit" onClick={delReview}>Delete</button>
                <Link className="delete-cancel" to={PATHS.LIST}>Cancel</Link>
              </Col>
            </Row>
          </Container>
        </div>  
      </>
    );
  } else {
    return (
      <>
        <h2>Update Review</h2>
        <div className="reviews_wrapper">
          <Container>
            <Row>
              <Col md={6}>
                <AddReviewForm
                  region={region}
                  producer={producer}
                  year={year}
                  notes={notes}
                  handler={updateReview}
                />
                <Link to={PATHS.LIST}>Go back</Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const ReviewDetail = () => {
  const [review, setReview] = useState();

  const { id } = useParams();
  const location = useLocation();
  const toDelete = location.pathname.indexOf('delete') >= 0;

  useEffect(() => {
    ReviewService.getReview(id)
    .then(response => response.json())
    .then(data => {
      setReview({...data});
    })
    .catch(err => console.error(err));
  }, []);

  if (!review) {
    return <h2>Loading...</h2>
  } else {
    return <InnerReviewDetail {...review} toDelete={toDelete} />
  }
}

export default ReviewDetail;
