import axios from 'axios';
import config from '../config';
import TokenService from './token-service';
import jwtDecode from 'jwt-decode';

const WatchListService = {
  addToWatchList(show) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    console.log('decoded token: ', decoded);
    axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/watchlist/`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      data: {
        user_id: decoded.user_id,
        title: show.title,
        image_url: show.image_url
      }
    })
      .then(res => console.log('addtoWatchlistAxios: ', res))
      .catch(error => console.log(error));
  },
  deleteFromWatchList(show) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    console.log('decoded token: ', decoded);
    axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/watchlist/`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      data: {
        user_id: decoded.user_id,
        title: show.title,
        image_url: show.image_url
      }
    })
      .then(res => console.log('addtoWatchlistAxios: ', res))
      .catch(error => console.log(error));
  },
  getWatchList() {
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
      .then(res => {
        console.log('response: ', res);
        return res;
      })
      .catch(error => console.log(error));
  }
};

export default WatchListService;
