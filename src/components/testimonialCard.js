import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <Quote className="quote-icon" />
        <div className="rating">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      
      <p className="testimonial-text">"{testimonial.text}"</p>
      
      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;