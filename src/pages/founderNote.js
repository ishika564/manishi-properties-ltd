import React from 'react';
import { Quote, Award, Heart, Users, TrendingUp } from 'lucide-react';
import profile from "../assets/images/papa good prof.png"
import prof from "../assets/images/papa prof.png"

const FounderNote = () => {
  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Started RealEstate Pro with a vision to transform the real estate experience'
    },
    {
      year: '2013',
      title: 'First Award',
      description: 'Received "Best New Real Estate Agency" award from the Chamber of Commerce'
    },
    {
      year: '2016',
      title: 'Team Expansion',
      description: 'Grew from a one-person operation to a team of 10 dedicated professionals'
    },
    {
      year: '2019',
      title: '1000th Sale',
      description: 'Celebrated our 1000th successful property transaction'
    },
    {
      year: '2022',
      title: 'Digital Innovation',
      description: 'Launched our advanced digital platform for seamless property searches'
    },
    {
      year: '2025',
      title: 'Market Leader',
      description: 'Recognized as the leading real estate agency in our region'
    }
  ];

  return (
    <div className="founder-note-page">
      <div className="founder-hero">
        <div className="founder-content">
          <div className="founder-text">
            <Quote className="quote-icon" />
            <h1>A Personal Note from Our Founder</h1>
            <p className="founder-intro">
              "Real estate is more than just buying and selling properties—it's about helping people 
              find their place in the world, creating memories, and building futures."
            </p>
            <div className="founder-signature">
              <img 
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                src={prof}
                alt="John Anderson" 
                className="founder-avatar"
              />
              <div>
                <h3>Yatish Bohra</h3>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>
          
          <div className="founder-image">
            <img 
            //   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              src={profile}
              alt="Founder at work" 
            />
          </div>
        </div>
      </div>

      <div className="founder-story">
        <div className="container">
          <div className="story-content">
            <h2>My Journey</h2>
            <div className="story-text">
              <p>
                Ten years ago, I had a dream to make my big empire at my dream location. The journey towards making my dream true led me to a lot of research and diving deep into the domain of real estate. Having experienced the frustration of working with agents who seemed 
                more interested in quick sales than understanding my needs, I knew there had to be a better way. 
              </p>
              
              <p>
                I started <b>Manishi Properties Ltd.</b> in my small apartment with nothing but a phone, a notepad and an unwavering commitment and passion to honesty and transparency. Those early days were challenging, but every satisfied client reinforced my belief that genuine care and expertise could make all the difference.
              </p>
              
              {/* <p>
                What began as a solo venture has grown into a thriving company with an incredible 
                team of professionals who share my values. We've helped thousands of families find 
                their dream homes, assisted investors in building their portfolios, and created 
                lasting relationships based on trust and results.
              </p> */}
              
              <p>
                Today, as I look back on my journey, I'm filled with gratitude—for my amazing clients who trusted me with their biggest life decisions, for my dedicated partners and seniors who brings motivation to me every day, and for the opportunity to make a positive 
                impact in our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="founder-values">
        <div className="container">
          <h2>What Drives Me</h2>
          <span>My passion, Your trust makes it all</span>
          <div className="values-grid">
            <div className="value-item">
              <Heart className="value-icon" /> <h3>Genuine Care</h3>
              <p>Every client's dream matters. I believe in taking the time to understand what truly makes a house feel like home.</p>
            </div>
            <div className="value-item">
              <Award className="value-icon" />
              <h3>Excellence</h3>
              <p>Good enough isn't good enough. I strive for excellence in every interaction, every transaction, every relationship.</p>
            </div>
            <div className="value-item">
              <Users className="value-icon" />
              <h3>Community</h3>
              <p>We're not just selling properties; we're helping build stronger communities where families thrive and businesses flourish.</p>
            </div>
            <div className="value-item">
              <TrendingUp className="value-icon" />
              <h3>Growth</h3>
              <p>Continuous learning and adaptation ensure I always provide my clients with the best service and latest market insights.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      {/* <div className="founder-timeline">
        <div className="container">
          <h2>Our Journey Together</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Personal Message */}
      <div className="personal-message">
        <div className="container">
          <div className="message-card">
            <Quote className="message-quote" />
            <h2>A Personal Promise</h2>
            <p>
              To every client who chooses <b>Manishi Properties Ltd.</b>, I make this promise: You're not just 
              a transaction to me. You're part of my extended family. I'll work tirelessly to 
              understand your needs, respect your timeline, and deliver results that exceed your 
              expectations. <br/>
              <i><b>My passion, Your trust makes it all</b></i>
              {/* Your success is our success, and your satisfaction is our greatest reward." */}
            </p>
            <div className="message-signature">
              <span>With gratitude,</span>
              <strong>Yatish Bohra</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderNote;