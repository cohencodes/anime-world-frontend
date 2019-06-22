import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import JikanApiService from '../../services/jikan-api-service';
import './Search.css';
import YouTubeApiService from '../../services/youtube-api-service';

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
      console.log('show results: ', shows);
      this.setState({ shows });
    });

    YouTubeApiService.getVideos(showTitle).then(videos => {
      console.log('video results: ', videos);
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
    return (
      <>
        <section>
          <h1>Search for a show</h1>
          <form className="searchbox" onSubmit={this.handleApiCalls}>
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
            <button type="submit">Find Shows</button>
          </form>
        </section>
        {this.state.shows.length > 0 ? (
          <SearchResults
            showResults={this.state.shows}
            videoResults={this.state.videos}
            characterResults={this.state.characters}
          />
        ) : null}
      </>
    );
  }
}

export default Search;
