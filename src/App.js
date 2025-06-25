// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Buy from './pages/buy';
import Sell from './pages/sell';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import FeaturedProperties from './pages/featuredProperties';
import Testimonials from './pages/testimonials';
import FounderNote from './pages/founderNote';
import Admin from './pages/admin';
// import './App.css';
import './styles/globals.css'

function App() {
  const [buyRequests, setBuyRequests] = useState([]);
  const [sellRequests, setSellRequests] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);

  const addBuyRequest = (request) => {
    setBuyRequests([...buyRequests, { ...request, id: Date.now(), timestamp: new Date() }]);
  };

  const addSellRequest = (request) => {
    setSellRequests([...sellRequests, { ...request, id: Date.now(), timestamp: new Date() }]);
  };

  const addContactMessage = (message) => {
    setContactMessages([...contactMessages, { ...message, id: Date.now(), timestamp: new Date() }]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy onSubmit={addBuyRequest} />} />
            <Route path="/sell" element={<Sell onSubmit={addSellRequest} />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact onSubmit={addContactMessage} />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            {/* <Route path="/featured" element={<FeaturedProperties />} /> */}
            {/* <Route path="/testimonials" element={<Testimonials />} /> */}
            <Route path="/founder" element={<FounderNote />} />
            <Route path="/admin" element={
              <Admin 
                buyRequests={buyRequests}
                sellRequests={sellRequests}
                contactMessages={contactMessages}
              />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;