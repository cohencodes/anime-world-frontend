import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../index.css';
import Navbar from '../components/Navbar/Navbar';
import routes from '../services/routes';
import Footer from '../components/Footer/Footer';

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
