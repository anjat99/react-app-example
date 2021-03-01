import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time
                </p>
                <div className="input-areas">
                    <form action="">
                        <input
                            type="email"  
                            name="email" 
                            placeholder="Your email" className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About US</h2>
                            <Link  to='/sign-up'> 
                                How it works
                            </Link>
                            <Link  to='/home'> 
                                Testemonials
                            </Link>
                            <Link  to='/home'> 
                               Careers
                            </Link>
                            <Link  to='/home'> 
                                Investors
                            </Link>
                            <Link  to='/home'> 
                                Terms of Service
                            </Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                            <Link to='/home'>
                                Contact
                            </Link>
                            <Link to='/home'>
                                Support
                            </Link>
                            <Link to='/home'>
                                Destinations
                            </Link>
                            <Link to='/home'>
                                Sponsorships
                            </Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                            <Link to='/home'>
                                Submit Video
                            </Link>
                            <Link to='/home'>
                                Ambassadors
                            </Link>
                            <Link to='/home'>
                                Agency
                            </Link>
                            <Link to='/home'>
                                Influencer
                            </Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                            <Link to='/home'>
                                Instagram
                            </Link>
                            <Link to='/home'>
                                Facebook
                            </Link>
                            <Link to='/home'>
                                Youtube
                            </Link>
                            <Link to='/home'>
                                Twitter
                            </Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/home" className="social-logo">
                            TRVL <i className="fab fa-typo3"> </i>
                        </Link>
                    </div>
                    <small className="website-rights">
                        TRVL &copy;2021.
                    </small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook" 
                            to="/home"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram" 
                            to="/home"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/home'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/home'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/home'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
