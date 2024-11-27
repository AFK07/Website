import React from 'react';
import './App.css'; // Ensure this matches the CSS file you're using
import entryImage from './entry.jpg'; // Correct path to entry image
import logo from './logo.png'; // Correct path to logo image
import tabLogo from './logo for tab.png'; // Correct path to tab logo

function App() {
  return (
    <div className="App">
      {/* Setting the favicon */}
      <link rel="icon" href={tabLogo} />

      {/* Navbar Section */}
      <div className="navbar">
        <img src={logo} alt="Logo" />
        <div className="nav-links">
          <a className="navigation" href="#" target="_blank" rel="noopener noreferrer">
            Home
          </a>
          <a className="navigation" href="#">
            About
          </a>
          <a className="navigation" href="#">
            Service
          </a>
          <a className="navigation" href="#">
            Contact
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote-entry">
        <img src={entryImage} alt="Everest Peak Cleaning" />
        <div className="quote-text-overlay">
          <h3>Professional Cleaning Services</h3>
          <p>for Homes, Serviced Accommodations, & Events</p>
          <a href="#" className="quote-button">
            Get A Free Quote
          </a>
        </div>
      </div>

      {/* Header Section */}
      <header>
        <div className="header-container">
          <img src={logo} alt="Logo" />
          <div className="text-container">
            <h3>Your Trusted Cleaning Service Provider</h3>
            <p>
              From the top of the world, we humbly offer you the highest quality of top-notch cleaning services
              for residential cleaning, service accommodations, Airbnb properties, and events. Our team is
              committed to delivering exceptional cleaning results, ensuring a fresh and hygienic environment
              for our clients.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
