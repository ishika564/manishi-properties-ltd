import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, ShoppingCart, DollarSign, BarChart3, User, Phone, Camera, Star, Heart, Shield, ShieldCheck, IndianRupee } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // { path: '/', label: 'Home', icon: Home },
    { path: '/buy', label: 'Buy', icon: ShoppingCart },
    { path: '/sell', label: 'Sell', icon: IndianRupee },
    // { path: '/featured', label: 'Featured', icon: Star },
    // { path: '/gallery', label: 'Gallery', icon: Camera },
    // { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    // { path: '/testimonials', label: 'Reviews', icon: Heart },
    { path: '/about', label: 'About', icon: User },
    // { path: '/founder', label: 'Founder', icon: Shield },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className='cont1'>
            {/* <div className='logo'> */}
                <Link to="/" className="nav-logo">
                <Home className="logo-icon" />
                <span>  Manishi Properties Ltd.</span>
                </Link>
                <a href='https://www.rera.mp.gov.in/upload/agent_files/41b389114171183113bfe0c4.pdf' className="nav-logo">
                <ShieldCheck className="logo-icon" />
                <span>  RERA certified</span>
                </a>
            {/* </div> */}

            {/* <h5>"My passion, Your trust makes it all"</h5> */}
            {/* <div className='nav-logo'> */}
              {/* <h5>RERA certified</h5> */}
            {/* </div> */}
        </div>
        
        <div className='cont'>
            <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                <Link
                    key={item.path}
                    to={item.path}
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                >
                    <Icon size={18} />
                    <span>{item.label}</span>
                </Link>
                );
            })}
            </div>
        </div>
            
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;