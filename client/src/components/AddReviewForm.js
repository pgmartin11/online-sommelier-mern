import React from "react";
import "../scss/add-review-form.scss";


const AddReviewForm = ({
  region,
  producer,
  year,
  notes,
  handler
}) => {

  return (
    <form onSubmit={handler}>
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