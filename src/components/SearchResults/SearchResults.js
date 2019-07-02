import React, { Component } from 'react';
import DetailPage from '../DetailPage/DetailPage';
import './SearchResults.css';

class SearchResults extends Component {
  state = {
    showDetailPage: false,
    showData: {},
    isLoading: true
  };

  renderDetailPage = showData => {
    this.setState({
      showData,
      showDetailPage: true,
      isLoading: false
    });
    this.props.getTitle(showData.title);
  };

  render() {
    const { showResults, videoResults, recs } = this.props;
    const { isLoading, showDetailPage, showData } = this.state;
    let showList;
    if (recs) {
      showList = recs.map(show => {
        return (
          <li key={show.mal_id}>
            <img src={show.image_url} alt={show.image_url} />
            <p>{show.title}</p>
            <button onClick={() => this.renderDetailPage(show)}>
              View Details
            </button>
          </li>
        );
      });
    }
    showList = showResults.map(show => {
      return (
        <li key={show.mal_id}>
          <img src={show.image_url} alt={show.image_url} />
          <p className="show_title">{show.title.slice(0, 19)} ...</p>
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
          !isLoading ? (
            <DetailPage showData={showData} videoResults={videoResults} />
          ) : (
            <h3>Loading...</h3>
          )
        ) : null}
      </section>
    );
  }
}

export default SearchResults;
