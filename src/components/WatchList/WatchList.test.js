import React from 'react';
import ReactDOM from 'react-dom';
import WatchList from './WatchList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WatchList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
