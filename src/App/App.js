import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../index.css';
import Navbar from '../components/Navbar/Navbar';
import LandingPage from '../components/LandingPage/LandingPage';
import SignupForm from '../components/SignupForm/SignupForm';
import Login from '../components/Login/Login';
import Search from '../components/Search/Search';
import DetailPage from '../components/DetailPage/DetailPage';
import WatchList from '../components/WatchList/WatchList';
import WatchListService from '../services/watchlist-service';

const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/signup',
    component: SignupForm
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/detailpage',
    component: DetailPage
  },
  {
    path: '/watchlist',
    component: WatchList,
    fetchInitialData: () => WatchListService.getWatchList
  }
];

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
        </main>
      </>
    );
  }
}

export default App;
