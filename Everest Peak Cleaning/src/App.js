import React from 'react';
import './App.css'; // Ensure this matches your CSS file
import entryImage from './entry.jpg'; // Correct path to entry image
import logo from './logo.png'; // Correct path to logo image
import tabLogo from './logo for tab.png'; // Correct path to tab logo
import residentCleaning from './images/residentcleaning.png';
import eventPartyCleanup from './images/event&partycleanup.png';
import servicedAccom from './images/servicedaccom&airbnb.png';

// Navbar Component
const Navbar = () => (
  <div className="navbar">
    <img src={logo} alt="Logo" />
    <div className="nav-links">
      <a className="navigation" href="#" target="_blank" rel="noopener noreferrer">
        Home
      </a>
      <a className="navigation" href="#">About</a>
      <a className="navigation" href="#">Service</a>
      <a className="navigation" href="#">Contact</a>
    </div>
  </div>
);

// Quote Section Component
const QuoteSection = () => (
  <div className="quote-entry">
    <img src={entryImage} alt="Everest Peak Cleaning" />
    <div className="quote-text-overlay">
      <h3>Professional Cleaning Services</h3>
      <p>for Homes, Serviced Accommodations, & Events</p>
      <a href="#" className="quote-button">Get A Free Quote</a>
    </div>
  </div>
);

// Header Component
const Header = () => (
  <header>
    <div className="header-container">
      <img src={logo} alt="Logo" />
      <div className="text-container">
        <h3>Your Trusted Cleaning Service Provider</h3>
        <p>
          From the top of the world, we humbly offer you the highest quality of cleaning services for
          residential cleaning, service accommodations, Airbnb properties, and events. Our team is committed
          to delivering exceptional cleaning results, ensuring a fresh and hygienic environment for our clients.
        </p>
        <a href="#">Learn More</a>
      </div>
    </div>
  </header>
);

// Cleaning Services Section Component
const CleaningServices = () => (
  <div className="cleaning-services">
    <h3>Our Comprehensive Cleaning Services</h3>
    <div className="cleaning-details">
      <div className="image-container">
        <img src={residentCleaning} alt="Residential Cleaning" />
        <div className="image-text">Residential Cleaning</div>
      </div>
      <div className="image-container">
        <img src={eventPartyCleanup} alt="Event and Party Cleanup" />
        <div className="image-text">Event and Party Cleanup</div>
      </div>
      <div className="image-container">
        <img src={servicedAccom} alt="Serviced Accommodation & Airbnb" />
        <div className="image-text">Serviced Accommodation & Airbnb</div>
      </div>
    </div>
    <div className="view-all-services">
      <a href="#" className="view-all-button">View All Services</a>
    </div>
  </div>
);

// Contact Section Component
const Contact = () => (
  <div className="contact">
    <div className="contact-info">
      <h3>Get in Touch for Superior Cleaning Services</h3>
      <p>
        Reach out to us by filling out the form or give us a call to schedule a complimentary on-site assessment
        for your cleaning needs. Service areas include a 20-mile radius from our base in Farnborough.
      </p>
      <p>
        <a href="https://www.google.com/maps/place/Ferneberga+House,+Alexandra+Rd,+Farnborough+GU14+6DQ" target="_blank">
          Suite 1.17 Ferneberga House, Alexander Road, Farnborough, GU14 6DQ
        </a>
      </p>
      <p>
        <a href="mailto:info@everestpeakcleaning.com" target="_blank">info@everestpeakcleaning.com</a>
      </p>
      <p><a href="tel:07450403112">07450 403 112</a></p>
    </div>
    <ContactForm />
  </div>
);

// Contact Form Component
const ContactForm = () => (
  <form className="ContactForm">
    <div className="client-name">
      <input type="text" placeholder="First Name" required />
      <input type="text" placeholder="Last Name" required />
    </div>
    <div className="client-contacts">
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone Number" required />
    </div>
    <div className="client-address">
      <input type="text" placeholder="Address" required />
    </div>
    <div className="client-subject">
      <input type="text" placeholder="Subject" required />
    </div>
    <div className="client-enquiry">
      <textarea placeholder="Type your message here" rows="5" required></textarea>
    </div>
    <div className="form-row">
      <button type="submit">Submit</button>
    </div>
  </form>
);

// Google Map Component
const LocationMap = () => (
  <div className="location" style={{ width: "100%", marginTop: "20px", height: "400px" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.7707151201015!2d-0.7522033!3d51.2799156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742b4ac2f00abd%3A0x8fd89f90881f6283!2sFerneberga%20House%2C%20Alexandra%20Rd%2C%20Farnborough%20GU14%206DQ!5e0!3m2!1sen!2suk!4v1698695412209!5m2!1sen!2suk"
      width="100%"
      height="100%"
      style={{ border: "none" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

// Main App Component
function App() {
  return (
    <>
      <link rel="icon" href={tabLogo} />
      <Navbar />
      <QuoteSection />
      <Header />
      <CleaningServices />
      <Contact />
      <LocationMap />
    </>
  );
}

export default App;


