import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Shield, Award, Users, CheckCircle } from 'lucide-react';
import PropertyCard from '../components/propertyCard';
import { featuredProperties } from '../data/sampleData';
import papa_bck_prop from '../assets/images/papa bc prop.png'
import papa_cover from '../assets/images/papa_cover.png'

const Home = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if(query.trim() !== ''){
            navigate(`/${encodeURIComponent(query)}`);
        }
    };


  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Clients' },
    { icon: Award, number: '500+', label: 'Properties Sold' },
    { icon: TrendingUp, number: '15+', label: 'Years Experience' },
    { icon: Shield, number: '100%', label: 'Satisfaction' }
  ];

  const services = [
    {
      icon: Search,
      title: 'Property Search',
      description: 'Find your dream plot with my advanced search tools and expert guidance'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Get detailed market insights and property valuations'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Safe and secure property transactions with complete legal support'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero-section">
          <div className='home-top'>
            <div className='home-slogan'>My passion, Your trust makes it all</div>

            <div className="home-hero-search">
                <input 
                    type="text" 
                    placeholder="Enter location, property type..." 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            handleSearch();
                        }
                    }}
                />
                <button className="search-btn">
                <Search size={20} />
                </button>
            </div>
          </div>
          
          <div className='home-left'>
            <div className="home-hero-actions">
                <Link to="/buy" className="btn-primary">Buy request</Link>
                <Link to="/sell" className="btn-secondary">Sell request</Link>
            </div>        
            <div className="home-hero-image">
            {/* <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Dream Home" /> */}
            <img src={papa_cover} />
            </div>
          </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <Icon className="stat-icon" />
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p>Comprehensive real estate solutions for all your needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <Icon className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      {/* <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p>Handpicked properties just for you</p>
          </div>
          
          <div className="properties-grid">
            {featuredProperties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} featured />
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/featured" className="btn-primary">View All Properties</Link>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="content-split">
            <div className="content-left">
              <h2>Why Choose Manishi Properties Ltd. ?</h2>
              <p>My passion, Your trust makes it all</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <CheckCircle className="check-icon" />
                  <span>Best price</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="check-icon" />
                  <span>Professional advice</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="check-icon" />
                  <span>Expert recommendation</span>
                </div>
                {/* <div className="feature-item">
                  <CheckCircle className="check-icon" />
                  <span>24/7 Support</span>
                </div> */}
              </div>
              
              <Link to="/about" className="btn-primary">Learn More About Us</Link>
            </div>
            
            <div className="content-right">
              <img 
                // src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                src={papa_bck_prop}
                alt="Real Estate Team" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;