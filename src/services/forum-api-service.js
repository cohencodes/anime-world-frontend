import axios from 'axios';
import config from '../config';
import TokenService from './token-service';
import jwtDecode from 'jwt-decode';

const ForumApiService = {
  postComment(comment, title) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/forum`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      data: {
        user_id: decoded.user_id,
        user_name: decoded.sub,
        comment,
        title
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data.error;
      });
  },
  deleteComment(id) {
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
        id
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => error.response.data.errors);
  },
  getComments(title) {
    axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/forum/${title}`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(res => {
        return res.data;
      })
      .catch(error => error.response.data.errors);
  },
  editComment(changeData) {
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
  }
};

export default ForumApiService;
