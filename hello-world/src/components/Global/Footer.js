//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Assets
import './css/Footer.css';

class Footer extends Component {
	static propTypes = {
	  copyright: PropTypes.string
	};
	
  render() {
  	const {copyright = '&copy; React 2017'} = this.props;

    return (
      <div className="Footer">
        <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
