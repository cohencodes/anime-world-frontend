import axios from 'axios';
import config from '../config';

const YouTubeApiService = {
  getVideos(title) {
    const params = {
      part: 'snippet',
      maxResults: 6,
      q: title,
      type: 'video',
      key: config.GOOGLE_API_KEY
    };

    const url = 'https://www.googleapis.com/youtube/v3/search';
    const queryString = this.formatQueryParams(params);
    const searchURL = url + '?' + queryString;

    return axios.get(searchURL).then(res => res.data.items);
  },

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join('&');
  }
};

export default YouTubeApiService;
