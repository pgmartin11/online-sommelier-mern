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
    <form onSubmit={submitHandler}>
      <label htmlFor="region">Region/Varietal:</label>
      <input
        type="text"
        className="form-control"
        required
        name="regionField"
        minLength="2"
        {...region}
      />
      <label htmlFor="producer">Producer:</label>
      <input
        type="text"
        className="form-control"
        required
        name="producerField"
        minLength="2"
        {...producer}
      />
      <label htmlFor="year">Year:</label>
      <input
        type="text"
        className="form-control"
        name="yearField"
        minLength="4"
        {...year}
      />
      <label htmlFor="notes">Tasting Notes:</label>
      <textarea
        name="notesField"
        {...notes}>
      </textarea>
      <input type="submit" />
    </form>
  );
}

export default AddReviewForm;