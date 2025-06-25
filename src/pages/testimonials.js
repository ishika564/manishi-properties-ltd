import React from 'react';
import { Star, Quote, Users } from 'lucide-react';
import TestimonialCard from '../components/testimonialCard';
import { testimonials } from '../data/sampleData';

const Testimonials = () => {
  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: testimonials.filter(t => t.rating === rating).length,
    percentage: (testimonials.filter(t => t.rating === rating).length / totalReviews) * 100
  }));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div className="testimonials-page">
      <div className="page-header">
        <h1>Client Testimonials</h1>
        <p>See what our satisfied clients have to say about our services</p>
      </div>

      {/* Rating Overview */}
      <div className="rating-overview">
        <div className="rating-summary">
          <div className="average-rating">
            <span className="rating-number">{averageRating.toFixed(1)}</span>
            <div className="rating-stars">
              {renderStars(Math.round(averageRating))}
            </div>
            <p>Based on {totalReviews} reviews</p>
          </div>

          <div className="rating-distribution">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="rating-bar">
                <span className="rating-label">{rating} star</span>
                <div className="bar-container">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="rating-count">({count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-summary">
          <div className="stat-item">
            <Users className="stat-icon" />
            <div>
              <h3>10,000+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="stat-item">
            <Star className="stat-icon" />
            <div>
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
          <div className="stat-item">
            <Quote className="stat-icon" />
            <div>
              <h3>500+</h3>
              <p>Five Star Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="testimonials-cta">
        <h2>Ready to Join Our Happy Clients?</h2>
        <p>Experience the same exceptional service that has earned us hundreds of five-star reviews.</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">Get Started Today</a>
          <a href="/buy" className="btn-secondary">Browse Properties</a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;