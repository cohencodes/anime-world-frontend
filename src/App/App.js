import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../index.css';
import Navbar from '../components/Navbar/Navbar';
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
import routes from '../services/routes';
import Footer from '../components/Footer/Footer';

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

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main role="main">
          <Switch>
            {routes.map(({ path, component: C, fetchInitialData }) => (
              <Route
                exact
                path={path}
                render={props => <C {...props} data={fetchInitialData} />}
                key={path}
              />
            ))}
          </Switch>
          <Footer />
        </main>
      </>
    );
  }
}

export default App;
