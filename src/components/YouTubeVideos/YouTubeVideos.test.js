import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeVideos from './YouTubeVideos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YouTubeVideos />, div);
  ReactDOM.unmountComponentAtNode(div);
});
