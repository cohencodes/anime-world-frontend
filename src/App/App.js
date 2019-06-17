import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../index.css';
import Navbar from '../components/Navbar/Navbar';
import LandingPage from '../components/LandingPage/LandingPage';
import SignupForm from '../components/SignupForm/SignupForm';
import Login from '../components/Login/Login';
import Search from '../components/Search/Search';
import DetailPage from '../components/DetailPage/DetailPage';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main role="main">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="/detailpage" component={DetailPage} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
