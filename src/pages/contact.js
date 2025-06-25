import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from 'lucide-react';

const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
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
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="success-page">
        <div className="success-content">
          <CheckCircle className="success-icon" />
          <h2>Message Sent Successfully!</h2>
          <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 99268-34555',
      subtitle: 'Mon-Fri 9am-6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'yatishbohra@gmail.com',
      subtitle: 'We reply within 24 hours'
    },
    // {
    //   icon: MapPin,
    //   title: 'Office',
    //   details: '123 Real Estate Ave',
    //   subtitle: 'City, State 12345'
    // },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9am-6pm',
      subtitle: 'Sat: 10am-4pm, Sun: Closed'
    }
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our real estate expert</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Get In Touch</h2>
          <p>Ready to buy, sell, or invest? We are here to help you every step of the way.</p>
          
          <div className="contact-cards">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="contact-card">
                  <Icon className="contact-icon" />
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p>{info.details}</p>
                    <span>{info.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-header">
              <Send className="form-icon" />
              <h3>Send us a Message</h3>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="buying">Buying Property</option>
                  <option value="selling">Selling Property</option>
                  <option value="renting">Renting Property</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Contact Method</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                  />
                  <span>Email</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                  />
                  <span>Phone</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your real estate needs..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section
      <div className="map-section">
        <div className="map-placeholder">
          <MapPin className="map-icon" />
          <h3>Visit Our Office</h3>
          <p>123 Real Estate Ave, City, State 12345</p>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;