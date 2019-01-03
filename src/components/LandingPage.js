import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import '../Carousel.css';

library.add(faFacebookF);
library.add(faTwitter);
library.add(faEnvelope);
library.add(far);

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="carousel-container">
          <div className="carousel">
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
              <div>
                <img alt="img" src={require('../img/one.jpg')} />
              </div>
              <div>
                <img alt="img" src={require('../img/two.jpg')} />
              </div>
              <div>
                <img alt="img" src={require('../img/three.jpg')} />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="title-container">
          <p>A worldwide guide to outdoor ice skating, Scandinavian style</p>
        </div>
        <div className="newsletter-signup">
          <p className="signup-text">Want to stay updated on the best places to skate? Sign up for our newsletter!</p>
          <div className="signup-button-container">
            <div className="ui input email-input"><input type="text" placeholder="Enter your email..." /></div>
            <div className="button-custom">Sign Up!</div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-info-container">
            <div className="contact-text">Contact</div>
            <div>© NordicSkaters 2018. All Rights Reserved.</div>
          </div>
          <div className="icons-container">
            <FontAwesomeIcon className="footer-icon" icon={['fab', 'facebook-f']} size="2x" />
            <FontAwesomeIcon className="footer-icon" icon={['far', 'envelope']} size="2x" />
            <FontAwesomeIcon className="footer-icon" icon={['fab', 'twitter']} size="2x" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
