import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  handleClick = () => {
    this.topFunction();
  };

  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  render() {
    return (
      <footer>
        <div className="footer-flex">
          <p>
            Built by: <a href="https://github.com/cohencodes">@cohencodes</a>
          </p>
          <button className="scroll-button" onClick={this.handleClick}>
            <FontAwesomeIcon
              icon="arrow-alt-circle-up"
              color="#6DB65B"
              size="lg"
            />{' '}
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;
