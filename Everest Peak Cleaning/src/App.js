import React from 'react';
import './App.css'; // Ensure this matches your CSS file
import entryImage from './entry.jpg'; // Correct path to entry image
import logo from './logo.png'; // Correct path to logo image
import tabLogo from './logo for tab.png'; // Correct path to tab logo
import headerimg from './headerimg.png'
import residentCleaning from './images/residentcleaning.png';
import eventPartyCleanup from './images/event&partycleanup.png';
import servicedAccom from './images/servicedaccom&airbnb.png';
import bpc from './images/bpc.jpg';
import tp from './images/tp.jpg';
import osc from './images/osc.jpg';
import eft from './images/eft.jpg';

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
      <img src={headerimg} alt="" />
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



// About Section Component with Two Rows (Updated with your images)
const About = () => (
  <section className="about-section">
    <h2>About Everest Peak Cleaning CO. Ltd</h2>
    <p>
      Established in February 2024, our aim is to provide exceptional
      bespoke cleaning services tailored to meet the unique needs of
      each individual client. We strive to create clean and hygienic
      environments that promote health, comfort, and well-being for
      those who entrust us with the care of their homes.
    </p>
    <h2>Our Cleaning Mission</h2>
    <p>
      At Everest Peak Cleaning CO. Ltd, our mission is to exceed our
      clients' expectations by delivering meticulous cleaning services
      that enhance the quality of their living spaces. We are committed
      to providing personalized cleaning solutions that cater to the
      specific preferences and requirements of each client, ensuring that
      every home we clean is a sanctuary of cleanliness and tranquility.
      Through our attention to detail, professionalism, and dedication
      to customer satisfaction, we aim to become the trusted partner for
      all cleaning needs in our flourishing community.
    </p>

    {/* Row 1 with image on the left, text on the right (bpc and tp) */}
    <div className="about-row">
      <div className="about-col">
        <img src={bpc} alt="Bespoke Cleaning" className="about-image" />
      </div>
      <div className="about-col">
        <h3>Bespoke Professional Consultations</h3>
        <p>We understand that every space is distinct and unique. 
          Our expert team offers on-site consultations to assess your cleaning 
          requirements and discuss the optimal approach for achieving a pristine 
          environment. We prioritise understanding your expectations and delivering 
          personalised cleaning solutions that align precisely with your vision.</p>
      </div>
      <div className="about-col">
        <img src={tp} alt="Party Cleanup" className="about-image" />
      </div>
      <div className="about-col">
        <h3>Transparent Pricing</h3>
        <p>At Everest Peak Cleaning we believe in transparency and integrity. 
          That's why we provide detailed and competitive cleaning estimates, ensuring that you 
          have a clear understanding of the services and costs involved before we commence our 
          cleaning operations.</p>
      </div>
    </div>

    {/* Row 2 with text on the left, image on the right (osc and eft) */}
    <div className="about-row">
      <div className="about-col">
        <h3>Our Service Guarantee</h3>
        <p>At Everest Peak Cleaning CO. Ltd, we are committed to upholding the highest standards 
          of cleaning excellence. We strive to exceed your cleaning expectations, and our dedication 
          to quality and customer satisfaction sets us apart. Your trust in our services motivates 
          us to continually enhance our cleaning practices and deliver outstanding results.</p>
      </div>
      <div className="about-col">
        <img src={osc} alt="Serviced Accommodation" className="about-image" />
      </div>
      <div className="about-col">
        <h3>Exquisite Finishing Touches</h3>
        <p>We take pride in adding the final touches that elevate the cleanliness and aesthetics 
          of your space. From immaculate surfaces to fresh fragrances, we ensure that every detail 
          is perfected, leaving you with a beautifully refreshed environment.</p>
      </div>
      <div className="about-col">
        <img src={eft} alt="End of Tenancy" className="about-image" />
      </div>
    </div>
  </section>
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
      <p>*If your cleaning needs fall further than the 40 miles radius, please let us know.</p>
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
    <div className="contact-form">
      <ContactForm />
    </div>
  </div>
);


const ContactForm = () => (
  <form className="ContactForm">
    {/* Name Fields in the Same Row */}
    <div className="client-name">
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name"  required />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name"  required />
      </div>
    </div>

    {/* Email and Phone Number in the Same Row */}
    <div className="client-contacts">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  required />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone"  required />
      </div>
    </div>

    {/* Address in its own Row */}
    <div className="client-address">
      <label htmlFor="address">Address</label>
      <input type="text" id="address"  required />
    </div>

    {/* Subject in its own Row */}
    <div className="client-subject">
      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject"  required />
    </div>

    {/* Client Enquiry in its own Row */}
    <div className="client-enquiry">
      <label htmlFor="enquiry">Client Enquiry</label>
      <textarea id="enquiry"  rows="5" required></textarea>
    </div>

    {/* Submit Button */}
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
      <About />  {/* Ensure About is rendered here */}
      <Contact />
      <LocationMap />
    </>
  );
}


export default App;


