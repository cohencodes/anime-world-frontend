import axios from 'axios';
import config from '../config';
import TokenService from './token-service';
import jwtDecode from 'jwt-decode';

const WatchListService = {
  addToWatchList(show) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
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
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data.error;
      });
  },
  changeEpisodeNumber(changeData) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    axios({
      method: 'put',
      url: `${config.API_ENDPOINT}/watchlist/${decoded.user_id}/change`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      data: {
        user_id: decoded.user_id,
        episode_number: changeData.episode_number,
        title: changeData.title
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => error.response.data.error);
  },
  deleteFromWatchList(title) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    axios({
      method: 'delete',
      url: `${config.API_ENDPOINT}/watchlist/${decoded.user_id}/delete`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      data: {
        user_id: decoded.user_id,
        title
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => error.response.data.errors);
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
        return res;
      })
      .catch(error => error.response.data.errors);
  }
};

export default WatchListService;
