import React from 'react';
import { Award, Users, TrendingUp, Shield, CheckCircle, Star } from 'lucide-react';
import handshake from "../assets/images/papa pr handshake.png"
import tirupati_map from '../assets/images/grand tirupati map.png'


const About = () => {
  const team = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '15+ years'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Senior Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '10+ years'
    },
    {
      name: 'Michael Chen',
      role: 'Property Investment Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '8+ years'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      experience: '7+ years'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships based on trust, transparency, and ethical business practices.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction, providing superior service and results.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients are at the heart of everything we do. Your success is our success.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace technology and innovative solutions to enhance your real estate experience.'
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Happy Clients' },
    { number: '500+', label: 'Properties Sold' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        {/* <div className='hero-title'>
          <span>ABOUT</span>
        </div> */}
        <div className="hero-content">
          <span>About Us</span>
          <p>My passion, Your trust makes it all</p>
        </div>
        <div className="hero-image">
          {/* <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Office" /> */}
          <img src={tirupati_map} />
        </div>
      </section>

      {/* Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="content-split">
            <div className="content-left">
              <h2>Our Story</h2>
              <p>Founded in 2024, <b>Manishi Properties Ltd.</b> began as a small business with a simple mission: <i>"To provide to the individuals best real estate locations where they can invest and grow".</i>   Our vision is always to put clients first. What started as an interest based operation has grown into a full-service real estate company serving thousands of satisfied clients.</p>
              
              <p>Our founder, <b>Mr. Yatish Bohra</b>, recognized as the first <i>Real Estate Regulatory Authority - RERA</i> certified broker in central zone of India. The growth of company is result of dedication, passion, and expertise of honourable founder. </p>

              <p>With his slogan <i>My passion, Your trust makes it all</i>, he built Manishi Properties Ltd. on the principles of integrity, expertise, and genuine care for each client's unique needs.</p>
              
              {/* <p>Today, we're proud to be one of the most trusted real estate companies in the region, with a team of experienced professionals who share our commitment to excellence.</p> */}
              
              <div className="story-highlights">
                <div className="highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Best price</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Professional advice</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Expert recommendation</span>
                </div>
              </div>
            </div>
            
            <div className="content-right">
              <img 
                // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team Meeting" 
                src={handshake}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="our-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-card">
                  <Icon className="value-icon" />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="our-team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-experience">
                    <Star className="star-icon" />
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      {/* <section className="achievements">
        <div className="container">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <h3>{achievement.number}</h3>
                <p>{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>To provide to the individuals best real estate locations where they can invest and grow that exceed expectations, build lasting relationships, and help our clients achieve their property goals with confidence and peace of mind.</p>
            
            <div className="mission-goals">
              <div className="goal-item">
                <Users className="goal-icon" />
                <div>
                  <h4>Client Success</h4>
                  <p>Every decision we make is focused on achieving the best outcomes for our clients.</p>
                </div>
              </div>
              <div className="goal-item">
                <Shield className="goal-icon" />
                <div>
                  <h4>Trust & Reliability</h4>
                  <p>We build trust through consistent, reliable service and transparent communication.</p>
                </div>
              </div>
              <div className="goal-item">
                <TrendingUp className="goal-icon" />
                <div>
                  <h4>Continuous Growth</h4>
                  <p>We continuously evolve and improve to better serve our clients and community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;