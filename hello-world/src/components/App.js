//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


//componentes

import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//data
import items from '../data/menu';

class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};

  render() {
  	const {children} = this.props;
  	
    return (
      <div className="App">
        <Header title="CodeJobs" items = {items}/>
        <Content body = {children} />
        <Footer copyright="&copy; CodeJobs 2017"/>
      </div>
    );
  }
}

export default App;
