import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import config from '../../config';
import WatchListForm from '../WatchListForm/WatchListForm';
import './WatchList.css';

class WatchList extends Component {
  state = {
    watchList: [],
    isLoading: true
  };

  componentDidMount = () => {
    this.getWatchList();
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
      .catch(error => console.log(error));
  };

  render() {
    const { watchList, isLoading } = this.state;
    return (
      <>
        <ul className="watchlist_ul">
          {!isLoading ? (
            watchList.data.map(show => {
              return (
                <li key={show.mal_id} className="watchlist_li">
                  <h2>{show.title}</h2>
                  <img src={show.image_url} alt={show.title} />
                  <dl>
                    <dt>Current Episode</dt>
                    <dd>{show.episode_number}</dd>
                  </dl>
                  <WatchListForm title={show.title} />
                </li>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </ul>
      </>
    );
  }
}

export default WatchList;
