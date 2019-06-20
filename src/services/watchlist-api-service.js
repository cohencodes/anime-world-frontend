import axios from 'axios';
import config from '../config';
import TokenService from './token-service';
import jwtDecode from 'jwt-decode';

const WatchListService = {
  addToWatchList(show) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    console.log('decoded token: ', decoded);

    // const postConfig = {
    //   url: `${config.API_ENDPOINT}/watchlist`,
    //   headers: {
    //     authorization: `bearer ${TokenService.getAuthToken()}`,
    //     'content-type': 'application/json'
    //   },
    //   body: {
    //     user_id: decoded.user_id,
    //     title: show.title,
    //     image_url: show.image_url
    //   }
    // };
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
  }
};

export default WatchListService;
