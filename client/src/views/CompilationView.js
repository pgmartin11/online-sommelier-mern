import React, { useContext, useEffect, useRef } from "react";
import { ReviewService } from "../providers/ReviewService";
import { useNavigate, Link } from "react-router-dom";

const CompilationView = () => {
  let reviews;

  useEffect(() => {
    ReviewService.listReviews()
    .then(response => response.json())
    .then(data => {
      reviews = data;

      //debug
      console.log('reviews', reviews);
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
    </>
  );
};

export default CompilationView;
