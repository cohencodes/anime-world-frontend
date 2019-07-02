import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import config from '../../config';
import WatchListForm from '../WatchListForm/WatchListForm';
import { Redirect } from 'react-router-dom';
import './WatchList.css';

class WatchList extends Component {
  state = {
    watchList: [],
    edited: false,
    isLoading: true
  };

  componentDidMount = () => {
    if (TokenService.hasAuthToken()) {
      this.timer = setInterval(() => this.getWatchList(), 1000);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  getWatchList = () => {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/watchlist/${decoded.user_id}/`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(watchList => {
        this.setState({ watchList, isLoading: false });
      })
      .catch(error => error.response.data.error);
  };

  render() {
    if (!TokenService.hasAuthToken()) {
      return <Redirect to="/home" />;
    }
    const { watchList, isLoading } = this.state;
    let watchListData;
    if (!isLoading) {
      watchListData = watchList.data.map(show => {
        return (
          <li key={show.id} className="watchlist_li">
            <p>{show.title}</p>
            <img src={show.image_url} alt={show.title} />
            <dl>
              <dt>Current Episode</dt>
              <dd>
                <span>{show.episode_number}</span>
              </dd>
            </dl>
            <WatchListForm title={show.title} />
          </li>
        );
      });
    }

    return (
      <>
        {!isLoading ? (
          <ul className="watchlist_ul">{watchListData}</ul>
        ) : (
          <h3 className="loading">Loading...</h3>
        )}
      </>
    );
  }
}

export default WatchList;
