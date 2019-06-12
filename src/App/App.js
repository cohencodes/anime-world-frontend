import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';
import Navbar from '../components/Navbar/Navbar';
import SignupForm from '../components/SignupForm/SignupForm';
import LandingPage from '../components/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <main role="main">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={SignupForm} />
          </Switch>{' '}
        </main>
      </>
    );
  }
}

export default App;
