import React from 'react';
import ReactDOM from 'react-dom';
import LandingInfo from './LandingInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
