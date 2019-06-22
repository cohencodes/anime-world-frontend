import React, { Component } from 'react';
import DetailPage from '../DetailPage/DetailPage';
import './SearchResults.css';

class SearchResults extends Component {
  state = {
    showDetailPage: false,
    showData: {}
  };

  renderDetailPage = showData => {
    console.log('details: ', showData);
    this.setState({ showData, showDetailPage: true });
  };

  render() {
    const { showResults, videoResults } = this.props;
    const { showDetailPage, showData } = this.state;
    const showList = showResults.map((show, index) => {
      return (
        <li key={index}>
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
