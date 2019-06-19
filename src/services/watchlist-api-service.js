import axios from 'axios';
import config from '../config';
import TokenService from './token-service';
import jwtDecode from 'jwt-decode';

const WatchListService = {
  addToWatchList(show) {
    const authToken = TokenService.getAuthToken();

    console.log('authToken', authToken);
    axios.post(`${config.API_ENDPOINT}/`);
  }
};

export default WatchListService;
