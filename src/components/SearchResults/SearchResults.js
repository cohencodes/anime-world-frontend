import React, { Component } from 'react';
import DetailPage from '../DetailPage/DetailPage';
import './SearchResults.css';

class SearchResults extends Component {
  state = {
    showDetailPage: false,
    showData: {}
  };

  renderDetailPage = showData => {
    this.setState({ showData, showDetailPage: true });
  };

  render() {
    const { showResults, videoResults } = this.props;
    const { showDetailPage, showData } = this.state;
    const showList = showResults.map(show => {
      return (
        <li key={show.mal_id}>
          <img src={show.image_url} alt={show.image_url} />
          <button onClick={() => this.renderDetailPage(show)}>
            View Details
          </button>
        </li>
      );
    });
    return (
      <section className="search-results">
        {!showDetailPage ? <ul className="show-list">{showList}</ul> : null}
        {showDetailPage ? (
          <DetailPage showData={showData} videoResults={videoResults} />
        ) : null}
      </section>
    );
  }
}

export default SearchResults;
