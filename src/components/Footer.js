import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './styles/Footer.css';
import './styles/App.css';

function Footer() {
  return (
    
      <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join our exclusive newsletter to receive best vacation deals
            </p>
            <p className="footer-subscription-text">
                You can unsubcribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                    <Button buttonStyle='btn--outline'>
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-in'>How it works</Link>
                    <Link to='/'>Testimonial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-in'>How it works</Link>
                    <Link to='/'>Testimonial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-in'>How it works</Link>
                    <Link to='/'>Testimonial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-in'>How it works</Link>
                    <Link to='/'>Testimonial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
        </div>
      
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to="/" className="social-logo">
                    SNOW <i className="fa-solid fa-snowflake"></i>
                </Link>
            </div>
            <small className="website-rights">SNOW @ 2022</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to="/"
                target='_blank'
                aria-label='Facebook'
                >
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link instagram"
                to="/"
                target='_blank'
                aria-label='Instagram'
                >
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link linkedin"
                to="/"
                target='_blank'
                aria-label='Linkedin'
                >
                    <i className="fab fa-linkedin"></i>
                </Link>
                <Link className="social-icon-link youtube"
                to="/"
                target='_blank'
                aria-label='Youtube'
                >
                    <i className="fab fa-youtube"></i>
                </Link>
                <Link className="social-icon-link twitter"
                to="/"
                target='_blank'
                aria-label='Twitter'
                >
                    <i className="fab fa-twitter"></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
