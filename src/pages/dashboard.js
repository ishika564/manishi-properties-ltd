import React from 'react';
import { TrendingUp, Users, DollarSign, Home, Award, Calendar, MapPin, Phone } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Home, label: 'Total Properties', value: '847', change: '+12%' },
    { icon: Users, label: 'Active Clients', value: '324', change: '+8%' },
    { icon: DollarSign, label: 'Sales This Month', value: '$2.4M', change: '+15%' },
    { icon: Award, label: 'Properties Sold', value: '156', change: '+23%' }
  ];

  const recentActivities = [
    { type: 'sale', property: 'Downtown Apartment', client: 'John Smith', amount: '$850,000', date: '2 hours ago' },
    { type: 'listing', property: 'Suburban Villa', client: 'Sarah Johnson', amount: '$1,200,000', date: '5 hours ago' },
    { type: 'viewing', property: 'Beachfront Condo', client: 'Mike Wilson', amount: '$750,000', date: '1 day ago' },
    { type: 'inquiry', property: 'Historic Townhouse', client: 'Emma Davis', amount: '$950,000', date: '2 days ago' }
  ];

  const upcomingAppointments = [
    { client: 'Robert Brown', property: 'Luxury Penthouse', time: '10:00 AM', date: 'Today' },
    { client: 'Lisa Chen', property: 'Family Home', time: '2:30 PM', date: 'Today' },
    { client: 'David Kim', property: 'Office Space', time: '11:00 AM', date: 'Tomorrow' },
    { client: 'Maria Garcia', property: 'Retail Store', time: '3:00 PM', date: 'Tomorrow' }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Property Dashboard</h1>
        <p>Overview of your real estate business performance</p>
      </div>

      <div className="dashboard-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <Icon size={24} />
                </div>
                <div className="stat-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                  <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="dashboard-grid">
          {/* Recent Activities */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Recent Activities</h3>
              <TrendingUp size={20} />
            </div>
            <div className="activities-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className={`activity-icon ${activity.type}`}>
                    <Home size={16} />
                  </div>
                  <div className="activity-content">
                    <h4>{activity.property}</h4>
                    <p>{activity.client} • {activity.amount}</p>
                    <span className="activity-time">{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Upcoming Appointments</h3>
              <Calendar size={20} />
            </div>
            <div className="appointments-list">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="appointment-item">
                  <div className="appointment-time">
                    <span className="time">{appointment.time}</span>
                    <span className="date">{appointment.date}</span>
                  </div>
                  <div className="appointment-content">
                    <h4>{appointment.client}</h4>
                    <p><MapPin size={14} /> {appointment.property}</p>
                  </div>
                  <button className="contact-btn">
                    <Phone size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="dashboard-card full-width">
          <div className="card-header">
            <h3>Sales Performance</h3>
            <TrendingUp size={20} />
          </div>
          <div className="chart-placeholder">
            <div className="chart-bars">
              <div className="bar" style={{height: '60%'}}></div>
              <div className="bar" style={{height: '80%'}}></div>
              <div className="bar" style={{height: '45%'}}></div>
              <div className="bar" style={{height: '90%'}}></div>
              <div className="bar" style={{height: '70%'}}></div>
              <div className="bar" style={{height: '95%'}}></div>
            </div>
            <div className="chart-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;