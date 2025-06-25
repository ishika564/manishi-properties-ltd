import React, { useState } from 'react';
import { CheckCircle, DollarSign, MapPin, Home, Calendar, IndianRupee } from 'lucide-react';

const Buy = ({ onSubmit }) => {
    const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    date: today,
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    budgetMin: '',
    budgetMax: '',
    // bedrooms: '',
    // bathrooms: '',
    area: '',
    // preferredDate: '',
    preferredPlotNo: '', 
    colonyName: '',
    plotSize: '',
    additionalRequirements: '',
    plotBlock: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
        propertyType: '',
        location: '',
        budgetMin: '',
        budgetMax: '',
        // bedrooms: '',
        // bathrooms: '',
        area: '',
        // preferredDate: '',
        preferredPlotNo: '', 
        colonyName: '',
        plotSize: '',
        additionalRequirements: '',
        plotBlock: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="success-page">
        <div className="success-content">
          <CheckCircle className="success-icon" />
          <h2>Request Submitted Successfully!</h2>
          <p>Thank you for your interest. Our team will contact you within 24 hours with suitable property options.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="buy-page">
      <div className="page-header">
        <h1>Find Your Dream Property</h1>
        <p>Tell us what you're looking for and we'll help you find the perfect plot</p>
      </div>
      
      <div className="form-container">
        <form onSubmit={handleSubmit} className="buy-form">
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
            <h3><MapPin size={20} /> Contact Information</h3>
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
            <h3><Home size={20} /> Property Requirements</h3>
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
                </select>
              </div> */}
              <div className="form-group">
                <label>Preferred Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Area"
                />
              </div>
              <div className='form-group'>
                <label>Preferred Colony </label>
                <select
                  name='colony'
                  value={formData.colony}
                  onChange={handleChange}
                >
                <option value="">Select colony</option>
                <option value="1">Grand Tirupati</option>
                <option value="2">Tirupati Crystal</option>
                <option value="3">Crystal Premium</option>
                <option value="4">Crystal A</option>
                <option value="5">Crystal B</option>
                <option value="6">Crystal C</option>
                <option value="7">Savariya</option>
                <option value="7">Other...</option>
                </select>
              </div>
              <div className="form-group">
                <label>Plot Number</label>
                <input
                  type='text'
                  name="preferredPlotNo"
                  value={formData.preferredPlotNo}
                  onChange={handleChange}
                  placeholder='Plot Number'
                />
                  {/* <option value="">Any</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select> */}
              </div>
              <div className="form-group">
                <label>Plot Block</label>
                <input
                  name="plotBlock"
                  value={formData.plotBlock}
                  onChange={handleChange}
                  placeholder='Plot Block'
                />
                  {/* <option value="">Any</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4+">4+ Bathrooms</option>
                </select> */}
              </div>
              <div className="form-group">
                <label>Area (sq ft)</label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Minimum area in sq ft"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3><IndianRupee size={20} /> Budget & Timeline</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Budget Range (Min) *</label>
                <input
                  type="number"
                  name="budgetMin"
                  value={formData.budgetMin}
                  onChange={handleChange}
                  placeholder="Minimum budget"
                  required
                />
              </div>
              <div className="form-group">
                <label>Budget Range (Max) *</label>
                <input
                  type="number"
                  name="budgetMax"
                  value={formData.budgetMax}
                  onChange={handleChange}
                  placeholder="Maximum budget"
                  required
                />
              </div>
              {/* <div className="form-group">
                <label>Preferred Move-in Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                />
              </div> */}
            </div>
          </div>

          <div className="form-section">
            <h3><Calendar size={20} /> Additional Requirements</h3>
            <div className="form-group">
              <label>Additional Requirements or Preferences</label>
              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                rows="4"
                placeholder="Any specific requirements, amenities, or preferences..."
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buy;