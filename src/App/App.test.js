import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faKey,
  faSearch,
  faStickyNote,
  faInfoCircle,
  faEdit,
  faTrashAlt,
  faPlayCircle,
  faCheckCircle,
  faComment,
  faComments,
  faArrowAltCircleUp
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faKey,
  faSearch,
  faStickyNote,
  faInfoCircle,
  faEdit,
  faTrashAlt,
  faPlayCircle,
  faCheckCircle,
  faComment,
  faComments,
  faArrowAltCircleUp
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
