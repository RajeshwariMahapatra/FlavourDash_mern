import React from 'react';
import Navbar from '../components/Navbar';

const ReviewPage = () => {
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

  const reviews = [
    {
      name: 'Customer 1',
      review: 'Delicious food and quick delivery. I\'m a regular customer!',
      rating: 4.5,
      image: 'reviewer1.jpg',
    },
    {
      name: 'Customer 2',
      review: 'FlavorDash never disappoints. Great variety and taste!',
      rating: 5.0,
      image: 'reviewer2.jpg',
    },
    {
      name: 'Customer 3',
      review: 'My go-to food delivery service. Always on time.',
      rating: 4.0,
      image: 'reviewer3.jpg',
    },
    {
      name: 'Customer 4',
      review: 'The best food delivery experience ever!',
      rating: 5.0,
      image: 'reviewer4.jpg',
    },
    {
      name: 'Customer 5',
      review: 'Always on time and delicious food.',
      rating: 4.0,
      image: 'reviewer5.jpg',
    },
    {
      name: 'Customer 6',
      review: 'Great taste and quality every time.',
      rating: 4.5,
      image: 'reviewer6.jpg',
    },
    {
      name: 'Customer 7',
      review: 'FlavorDash has a wide range of food options.',
      rating: 4.5,
      image: 'reviewer7.jpg',
    },
    {
      name: 'Customer 8',
      review: 'Quick delivery and excellent service.',
      rating: 4.0,
      image: 'reviewer8.jpg',
    },
    {
      name: 'Customer 9',
      review: 'I love the variety of dishes available.',
      rating: 5.0,
      image: 'reviewer9.jpg',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="mt-4 mb-3">Customer Reviews</h1>
        <div className="row">
          {reviews.map((review, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div style={cardStyle}>
                <img
                  src={review.image}
                  className="card-img-top"
                  alt={review.name}
                />
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
    </div>
  );
};

export default ReviewPage;
