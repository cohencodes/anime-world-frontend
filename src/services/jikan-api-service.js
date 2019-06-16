import axios from 'axios';
// import config from '../config';

const JikanApiService = {
  getShows(title) {
    console.log('title from search component:', title);
    return axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${title}`)
      .then(res => res.data.results);
  },
  getCharacters(character) {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${character}`)
      .then(res => res.data.results);
  }
};

export default JikanApiService;
