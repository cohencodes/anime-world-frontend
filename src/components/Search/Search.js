import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import JikanApiService from '../../services/jikan-api-service';

class Search extends Component {
  static defaultProps = {
    getShows: () => {},
    getCharacters: () => {}
  };

  state = {
    showTitle: '',
    characterTitle: '',
    shows: [],
    characters: []
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSearchShows = event => {
    event.preventDefault();
    const { showTitle } = this.state;

    JikanApiService.getShows(showTitle).then(shows => {
      console.log('show results: ', shows);
      this.setState({ shows });
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
          <form className="searchbox" onSubmit={this.handleSearchShows}>
            <label htmlFor="search">Search Show</label>
            <input
              ref="search"
              name="showTitle"
              onChange={this.handleChange}
              className="searchbox__input"
              type="text"
              placeholder="Search Anime Title..."
              id="q"
            />
            <button type="submit">Go</button>
            <label htmlFor="search">Search Character</label>
            <input
              ref="search"
              name="characterTitle"
              onChange={this.handleChange}
              className="searchbox__input"
              type="text"
              placeholder="Search Anime Character..."
              id="q"
            />
            <button type="submit">Go</button>
          </form>
        </section>
        {this.state.shows ? (
          <SearchResults
            showResults={this.state.shows}
            characterResults={this.state.characters}
          />
        ) : null}
      </>
    );
  }
}

export default Search;
