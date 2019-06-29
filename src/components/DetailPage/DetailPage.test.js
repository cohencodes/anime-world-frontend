import React from 'react';
import ReactDOM from 'react-dom';
import DetailPage from './DetailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
