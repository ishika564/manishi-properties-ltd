import React, { useState } from 'react';
import { CheckCircle, DollarSign, Camera, Home, FileText, IndianRupee } from 'lucide-react';
import { data } from 'react-router-dom';

const Sell = ({ onSubmit }) => {
    const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    date: today,
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    address: '',
    // bedrooms: '',
    // bathrooms: '',
    area: '',
    yearBuilt: '',
    expectedPrice: '',
    urgency: '',
    // propertyCondition: '',
    amenities: [],
    description: '',
    reasonForSelling: '',
    plotBlock: '',
    negotiatedPrice: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const amenitiesList = [
    'Corner', 'Garden', 'Swimming Pool', 'Near School', 'Near Hospital', 'Near temple'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAmenityChange = (amenity) => {
    const updatedAmenities = formData.amenities.includes(amenity)
      ? formData.amenities.filter(a => a !== amenity)
      : [...formData.amenities, amenity];
    
    setFormData({
      ...formData,
      amenities: updatedAmenities
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
    setTimeout(() => {
        const today = new Date().toISOString().split('T')[0];
      setSubmitted(false);
      setFormData({
        date: today,
        name: '',
        email: '',
        phone: '',
        // propertyType: '',
        address: '',
        // bedrooms: '',
        // bathrooms: '',
        area: '',
        // yearBuilt: '',
        expectedPrice: '',
        urgency: '',
        // propertyCondition: '',
        // amenities: [],
        description: '',
        reasonForSelling: '', 
        colony: '',
        plotNo: '',
        negotiatedPrice: '',
        plotBlock: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="success-page">
        <div className="success-content">
          <CheckCircle className="success-icon" />
          <h2>Property Listed Successfully!</h2>
          <p>Thank you for choosing us. Our team will evaluate your property and contact you within 24 hours with a market analysis.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sell-page">
      <div className="page-header">
        <h1>Sell Your Property</h1>
        <p>Get the best value for your property with our expert marketing and sales team</p>
      </div>
      
      <div className="form-container">
        <form onSubmit={handleSubmit} className="sell-form">
          <div className='form-section'>
            <div className='form-group'>
                <label>Date: </label>
                <input 
                    type='date' 
                    name='date'
                    value={formData.date}
                />
            </div>
          </div>
          <div className="form-section">
            <h3><Home size={20} /> Contact Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='name'
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='email'
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='123456789'
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3><FileText size={20} /> Property Details</h3>
            <div className="form-grid">
              {/* <div className="form-group">
                <label>Property Type *</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
              </div> */}
              <div className="form-group full-width">
                <label>Property Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Complete address with city and zip code"
                  required
                />
              </div>
              <div className='form-group'>
                <label>Location *</label>
                <input 
                  name='location'
                  value={formData.location}
                  onChange={handleChange}
                  placeholder='Location'
                  required
                />
              </div>
              <div className="form-group">
                <label>Area (sq ft) *</label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder='Area in sq feet'
                  required
                />
              </div>
              <div className="form-group">
                <label>Plot Number *</label>
                <input
                  name="plotNo"
                  value={formData.plotNo}
                  onChange={handleChange}
                  placeholder='Plot Number'
                  required
                />
                  {/* <option value="">Select</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option> */}
                {/* </select> */}
              </div>
              <div className="form-group">
                <label>Plot Block</label>
                <input
                  type='text'
                  name="plotBlock"
                  value={formData.plotBlock}
                  onChange={handleChange}
                  placeholder='Plot Block'
                />
                  {/* <option value="">Select</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4+">4+ Bathrooms</option>
                </select> */}
              </div>
              

              {/* <div className="form-group">
                <label>Year Built</label>
                <input
                  type="number"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                  min="1900"
                  max="2025"
                />
              </div> */}
              {/* <div className="form-group">
                <label>Property Condition *</label>
                <select
                  name="propertyCondition"
                  value={formData.propertyCondition}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="needs-repair">Needs Repair</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="form-section">
            <h3><IndianRupee size={20} /> Pricing & Timeline</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Expected Price *</label>
                <input
                  type="number"
                  name="expectedPrice"
                  value={formData.expectedPrice}
                  onChange={handleChange}
                  placeholder="Your expected selling price"
                  required
                />
              </div>
              <div className='form-group'>
                <label>Negotiable price</label>
                <input
                  type='number'
                  name='negotiatedPrice'
                  value={formData.negotiatedPrice}
                  onChange={handleChange}
                  placeholder='Negotiation'
                />
              </div>
              <div className="form-group">
                <label>How urgent is the sale? *</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select urgency</option>
                  <option value="immediately">Immediately (within 1 month)</option>
                  <option value="soon">Soon (1-3 months)</option>
                  <option value="flexible">Flexible (3-6 months)</option>
                  <option value="no-rush">No rush (6+ months)</option>
                </select>
              </div>
              {/* <div className="form-group">
                <label>Reason for Selling</label>
                <select
                  name="reasonForSelling"
                  value={formData.reasonForSelling}
                  onChange={handleChange}
                >
                  <option value="">Select reason (optional)</option>
                  <option value="upgrading">Upgrading to larger home</option>
                  <option value="downsizing">Downsizing</option>
                  <option value="relocating">Relocating for work</option>
                  <option value="investment">Investment property</option>
                  <option value="financial">Financial reasons</option>
                  <option value="other">Other</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="form-section">
            <h3><Camera size={20} /> Amenities & Features</h3>
            <div className="amenities-grid">
              {amenitiesList.map((amenity) => (
                <label key={amenity} className="amenity-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Property Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your property, unique features, neighborhood highlights..."
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            List My Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;