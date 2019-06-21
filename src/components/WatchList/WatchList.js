import React, { Component } from 'react';
// import WatchListService from '../../services/watchlist-service';
import TokenService from '../../services/token-service';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import config from '../../config';

class WatchList extends Component {
  state = {
    watchList: [],
    isLoading: true
  };

  componentDidMount = () => {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/watchlist/${decoded.user_id}`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(watchList => {
        console.log('response: ', watchList);
        this.setState({ watchList }, this.setWatchList());
      })
      .catch(error => console.log(error));
  };

  setWatchList = () => {
    this.setState({ isLoading: false });
  };

  render() {
    console.log('watchlist from state', this.state.watchList);
    const { watchList } = this.state;
    return (
      <>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          watchList.map(show => {
            return (
              <section>
                <header>
                  <h2>{show.title}</h2>
                  <img src={show.image_url} alt={show.title} />
                </header>
                <dl>
                  <dt>Current Episode</dt>
                  <dd>9</dd>
                </dl>
                <button>Edit</button>
                <button>Delete</button>
              </section>
            );
          })
        )}
      </>
    );
  }
}

export default WatchList;
