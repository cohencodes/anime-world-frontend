import axios from 'axios';
// import config from '../config';

const JikanApiService = {
  getShows(title) {
    const url = `https://api.jikan.moe/v3/search/anime?q=${title}`;
    return axios.get(url).then(res => res.data.results);
  },
  getCharacters(character) {
    const url = `https://api.jikan.moe/v3/search/anime?q=${character}`;
    return axios.get(url).then(res => res.data.results);
  },
  getTopRecommendedShows() {
    const url = `https://api.jikan.moe/v3/search/anime?order_by=score`;
    return axios.get(url).then(res => res.data.results);
  }
};

export default JikanApiService;
