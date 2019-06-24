import React from 'react';
import ReactDOM from 'react-dom';
import App from './/App/App';
import { BrowserRouter } from 'react-router-dom';

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
  faArrowAltCircleUp,
  faCheckCircle
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
  faArrowAltCircleUp,
  faCheckCircle
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
