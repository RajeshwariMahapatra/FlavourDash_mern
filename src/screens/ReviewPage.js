import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const ReviewPage = () => {
  const [newReview, setNewReview] = useState({ name: '', review: '', rating: 0 });
  const [reviews, setReviews] = useState([
    {
      name: 'Riya',
      review: 'Delicious food and quick delivery. I\'m a regular customer!',
      rating: 4.5,
      image: 'reviewer1.jpg',
    },
    {
      name: 'Sam',
      review: 'FlavorDash never disappoints. Great variety and taste!',
      rating: 5.0,
      image: 'reviewer2.jpg',
    },
    {
      name: 'Ausha',
      review: 'My go-to food delivery service. Always on time.',
      rating: 4.0,
      image: 'reviewer3.jpg',
    },
    {
      name: 'Jon',
      review: 'The best food delivery experience ever!',
      rating: 5.0,
      image: 'reviewer4.jpg',
    },
    {
      name: 'Tabs',
      review: 'Always on time and delicious food.',
      rating: 4.0,
      image: 'reviewer5.jpg',
    },
    {
      name: 'Raju',
      review: 'Great taste and quality every time.',
      rating: 4.5,
      image: 'reviewer6.jpg',
    },
  ]);

  const renderStarRating = (rating) => {
    const maxStars = 5;
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-warning"></i>);
      }
    }

    return (
      <div className="star-rating">
        {stars}
        <span>{rating} / 5</span>
      </div>
    );
  };

  const cardStyle = {
    border: '1px solid #ddd',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const cardTextStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '1rem',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', review: '', rating: 0 });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="mt-4 mb-3">Customer Reviews</h1>
        <div className="row">
          {reviews.map((review, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div style={cardStyle}>
                <div className="card-body">
                  <h5 style={cardTitleStyle}>{review.name}</h5>
                  <p style={cardTextStyle}>{review.review}</p>
                  <p className="card-text">Rating: {renderStarRating(review.rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-4">
        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="review" className="form-label">Review</label>
            <textarea
              className="form-control"
              id="review"
              rows="3"
              value={newReview.review}
              onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input
              type="number"
              className="form-control"
              id="rating"
              min="0"
              max="5"
              step="0.1"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseFloat(e.target.value) })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
