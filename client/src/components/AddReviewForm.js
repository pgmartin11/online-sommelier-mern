import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PATHS } from "../constants";
import { useInput } from "../hooks";
import "../scss/add-review-form.scss";


const AddReviewForm = () => {
  const [region, resetRegion] = useInput('');
  const [producer, resetProducer] = useInput('');
  const [year, resetYear] = useInput('');
  const [notes, resetNotes] = useInput('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
console.log('region', region, 'producer', producer, 'year', year, 'notes', notes);
    
    resetRegion();
    resetProducer();
    resetYear();
    resetNotes();
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <form onSubmit={submitHandler}>
            <label htmlFor="region">Region/Varietal:</label>
            <input
              type="text"
              className="form-control"
              name="regionField"
              {...region}
            />
            <label htmlFor="producer">Producer:</label>
            <input
              type="text"
              className="form-control"
              required
              minLength="2"
              {...producer}
            />
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              className="form-control"
              name="yearField"
              {...year}
            />
            <label htmlFor="notes">Tasting Notes:</label>
            <textarea
              name="notesField"
              {...notes}>
            </textarea>
            <input type="submit" />
          </form>
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
  );
}

export default AddReviewForm;