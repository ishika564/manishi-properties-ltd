import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
const PropertyCard = ({ property, featured = false }) => {
  return (
    <div className={`property-card ${featured ? 'featured-card' : ''}`}>
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-badge">{property.status}</div>
        <button className="favorite-btn">
          <Heart size={20} />
        </button>
      </div>
      
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>
        
        <div className="property-features">
          {/* <div className="feature">
            <Bed size={16} />
            <span>{property.area} Area</span>
          </div>
          <div className="feature">
            <Bath size={16} />
            <span>{property.bathrooms} Baths</span>
          </div> */}
          <div className="feature">
            <Square size={16} />
            <span>{property.area} sq ft</span>
          </div>
        </div>
        
        <div className="property-footer">
          <div className="property-price">₹{property.price.toLocaleString()}</div>
          <button className="contact-btn"><Link to="/contact">Contact Agent</Link></button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;