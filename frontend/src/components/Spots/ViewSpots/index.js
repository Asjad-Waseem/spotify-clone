import React, { useState, useEffect } from "react";
import "./index.css";

import { useHistory, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  addNewReview,
  getSelectedSpotReviews,
  deleteMyReview,
  editMyReview,
} from "../../../store/reviewsReducer";
import { getSelectedSpot } from "../../../store/spotsReducer";

const ViewSpots = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const spot = useSelector((state) => state.spotsState);
  const reviews = useSelector((state) => state.reviews?.Reviews);
  const sessionUser = useSelector((state) => state.session.user);
  let userId = sessionUser && sessionUser.id;
  const history = useHistory();

  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");
  const [editReview, setEditReview] = useState("");
  const [editStars, setEditStars] = useState(0);
  const [actionToggled, setActionToggled] = useState();
  const [editState, setEditState] = useState(false);
  const [reviewId, setReviewId] = useState("");

  const spotId = location?.pathname?.substring(7, location.pathname.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      userId,
      review,
      stars,
    };
    // eslint-disable-next-line
    {
      dispatch(addNewReview(spotId, reviewData));
      setActionToggled((actionToggled) => !actionToggled);
    }
  };

  const handleReviewEdit = (e) => {
    e.preventDefault();
    const editedReviewData = {
      review: editReview,
      stars: editStars,
    };
    // eslint-disable-next-line
    {
      dispatch(editMyReview(reviewId, editedReviewData));
      setEditState((editState) => !editState);
      setActionToggled((actionToggled) => !actionToggled);
    }
  };

  useEffect(() => {
    dispatch(getSelectedSpotReviews(spotId));
    dispatch(getSelectedSpot(spotId));
    // eslint-disable-next-line
  }, [dispatch, actionToggled]);

  return (
    <>
      <div className="spot-detail-main">
        <div className="spot-section">
          <div className="spot-name">
            <h1>{spot?.name}</h1>
          </div>
          <div className="spot-description">
            <div>
              {spot?.city}, {spot?.state}, {spot?.country}
            </div>
          </div>
          <div className="spot-rating">{spot?.avgStarRating}</div>
          <div className="spot-header-image">
            <img src={spot?.SpotImages?.[0]?.url} alt="First Place" />
          </div>
        </div>
        <div className="review-section">
          <div className="review-header">
            <h2>Reviews</h2>
          </div>

          <div className="user-review">
            {sessionUser?.username ? (
              <form className="user-review-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                />
                <label className="stars-label" htmlFor="stars">
                  Stars
                </label>
                <input
                  className="general-input"
                  type="number"
                  placeholder="Stars"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                  min="0"
                  max="5"
                  required
                />
                <button type="submit">Submit Review</button>
              </form>
            ) : (
              <div>
                <div className="login-container">
                  <div>Please log in to submit a review.</div>
                  <div className="login-button">
                    <button
                      className="header-login-button"
                      onClick={() => history.push("/login")}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {reviews?.map((review) => (
            <div className="other-reviews-container">
              {review?.User?.id === userId && (
                <>
                  <Link
                    className="delete-icon fa-solid fa-pen-to-square"
                    to={`/spots/${spotId}`}
                    onClick={() => {
                      setEditState((editState) => !editState);
                      setReviewId(review.id);
                    }}
                  />
                  <Link
                    className="delete-icon fa-solid fa-trash"
                    to={`/spots/${spotId}`}
                    onClick={() => {
                      dispatch(deleteMyReview(review.id));
                      setActionToggled((actionToggled) => !actionToggled);
                    }}
                  />
                </>
              )}

              {editState === true ? (
                <form className="user-review-form" onSubmit={handleReviewEdit}>
                  <input
                    className="general-input"
                    type="text"
                    placeholder="Review"
                    value={editReview}
                    onChange={(e) => setEditReview(e.target.value)}
                    required
                  />
                  <label className="stars-label" htmlFor="editStars">
                    Stars
                  </label>
                  <input
                    className="general-input"
                    type="number"
                    placeholder="Stars"
                    value={editStars}
                    onChange={(e) => setEditStars(e.target.value)}
                    min="0"
                    max="5"
                    required
                  />
                  <button type="submit">Edit My Review</button>
                </form>
              ) : (
                <div className="other-review-container">
                  <div className="reviewer-name">
                    {review?.User?.firstName} {review?.User?.lastName}
                  </div>
                  <div className="review-date">
                    {review?.createdAt?.slice(0, 10)}
                  </div>
                  <div className="review-review">{review?.review}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewSpots;
