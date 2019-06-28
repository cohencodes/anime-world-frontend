import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import JikanApiService from '../../services/jikan-api-service';
import YouTubeApiService from '../../services/youtube-api-service';
import './Search.css';

class Search extends Component {
  static defaultProps = {
    getShows: () => {},
    getCharacters: () => {}
  };

  state = {
    showTitle: '',
    characterTitle: '',
    shows: [],
    videos: [],
    characters: [],
    recs: [],
    isLoading: true,
    searchSubmitted: false,
    searchEx: [
      'Naruto',
      'Bleach',
      'One Piece',
      'Fullmetal Alchemist',
      'Fairy Tale',
      'Dragon Ball Z',
      'Code Geass',
      'Cowboy Bepop',
      'Pokemon',
      'HunterxHunter',
      'Sword Art Online',
      'Steins;Gate',
      'Akame ga Kill'
    ]
  };

  componentDidMount = () => {
    const { searchEx } = this.state;

    const input = document.getElementById('search');

    setInterval(() => {
      input.setAttribute(
        'placeholder',
        searchEx[searchEx.push(searchEx.shift()) - 1]
      );
    }, 1700);

    this.getShows();
  };

  getShows = async () => {
    const recs = await JikanApiService.getTopRecommendedShows();

    this.setState({ recs, isLoading: false });
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleApiCalls = event => {
    event.preventDefault();
    const { showTitle } = this.state;

    JikanApiService.getShows(showTitle).then(shows => {
      this.setState({ shows, searchSubmitted: true });
    });

    YouTubeApiService.getVideos(showTitle).then(videos => {
      console.log('videos ran', videos);
      this.setState({ videos });
    });
  };

  handleSearchCharacters = event => {
    event.preventDefault();
    const character = this.state.characterTitle;

    JikanApiService.getCharacters(character).then(characters =>
      this.setState({ characters })
    );
  };

  render() {
    const {
      shows,
      recs,
      videos,
      characters,
      showTitle,
      searchSubmitted
    } = this.state;
    return (
      <>
        <section>
          <h1>Search for a show</h1>
          <form className="search_form" onSubmit={this.handleApiCalls}>
            <label htmlFor="search" />
            <input
              ref="search"
              name="showTitle"
              onChange={this.handleChange}
              className="searchbox__input"
              type="text"
              placeholder="Want some suggestions?"
              id="search"
            />
            <button type="submit" className="search_button">
              Find Shows
            </button>
          </form>
        </section>
        {recs.length > 0 ? (
          !searchSubmitted ? (
            <>
              <h2>Recommended For You</h2>
              <SearchResults
                showResults={recs}
                videoResults={videos}
                characterResults={characters}
              />
            </>
          ) : null
        ) : null}
        {shows.length > 0 ? (
          <>
            <h2>
              Showing Results for{' '}
              {showTitle &&
                showTitle
                  .split(' ')
                  .map(word => word[0].toUpperCase() + word.slice(1))
                  .join(' ')}
            </h2>
            <SearchResults
              showResults={shows}
              videoResults={videos}
              characterResults={characters}
            />
          </>
        ) : null}
      </>
    );
  }
}

export default Search;
