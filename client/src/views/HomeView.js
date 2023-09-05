import React, { useContext, useState, useEffect, useRef } from "react";
import { ReviewService } from "../providers/ReviewService";
import { useNavigate, Link } from "react-router-dom";
import { PATHS } from "../constants";
import Review from "../components/Review";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddReviewForm from "../components/AddReviewForm";


const HomeView = () => {
  //let [reviews, setReviews] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <>
      <h2>Introduction</h2>
      <p>
        The love for wine is overflowing across the internet, and people passionate
        about wine need a resource for staying updated, broadening their knowledge,
        and curating their wine cellar.
      </p>
      <p>
        It is for these reasons that we have launched this new website. Much is still
        under development, so be sure to come back soon to see the latest updates!
      </p>
      <h3>Review a Wine!</h3>
      <p>
        After opening a new bottle, record your impresssions using the form below.
        Visit our <Link to={PATHS.LIST}>reviews page</Link> to see all past reviews.
      </p>
      <Container>
        <Row>
          <Col md={6}>
            <AddReviewForm />
          </Col> 
          <Col md={6}>
            <div className="reviews_wrapper">
              <p className="region"></p>
              <p></p>
              <p></p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeView;
