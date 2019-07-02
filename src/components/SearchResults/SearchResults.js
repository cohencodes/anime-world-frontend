import React, { Component } from 'react';
import DetailPage from '../DetailPage/DetailPage';
import { Link } from 'react-router-dom';
import './SearchResults.css';

class SearchResults extends Component {
  static defaultProps = {
    getTitle: () => {}
  };

  state = {
    showDetailPage: false,
    showData: {},
    isLoading: true
  };

  renderDetailPage = showData => {
    console.log('renderdetail ran');
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
            <Link
              to={{
                pathname: `/detailpage/${show.title}`,
                state: {
                  showData: show,
                  videoResults,
                  showDetailPage: true
                }
              }}
              onClick={() => this.renderDetailPage(show)}
              className="link_button"
            >
              View Details
            </Link>
          </li>
        );
      });
    }
    showList = showResults.map(show => {
      return (
        <li key={show.mal_id}>
          <img src={show.image_url} alt={show.image_url} />
          <p className="show_title">{show.title.slice(0, 19)} ...</p>
          <Link
            to={{
              pathname: `/detailpage/${show.title}`,
              state: {
                showData: show,
                videoResults,
                showDetailPage: true
              }
            }}
            onClick={() => this.renderDetailPage(show)}
            className="link_button"
          >
            View Details
          </Link>
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
