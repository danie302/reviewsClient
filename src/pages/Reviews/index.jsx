// Dependencies
import React, { Fragment, useEffect, useState } from "react";

// Components
import Review from "@components/Review/";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getReviews } from "@redux/actions/reviewsAction";

// Assets
import "./reviews.scss";

export default function Reviews() {
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState([]);
  const reduxProp = useSelector((state) => state.reviews);
  const dispatchReviews = async () => {
    dispatch(await getReviews());
  };
  useEffect(() => {
    dispatchReviews();
  }, []);
  useEffect(() => {
    if (reduxProp.reviews) {
      setReviews(reduxProp.reviews);
    }
  }, [reduxProp]);
  console.log(reviews.length > 0, "Here");
  let cards = reviews
    ? reviews.map((review, index) => {
        console.log("Done");
        return (
          <Review
            key={index}
            image={`http:///192.168.1.10:8000${review.image}`}
            paragraph={review.review}
            name={review.traveller}
            place={review.city}
          />
        );
      })
    : null;
  console.log(cards);
  return (
    <Fragment>
      <h1 className="reviews--title">Reviews</h1>
      <div className="reviews--container">{cards}</div>
    </Fragment>
  );
}
