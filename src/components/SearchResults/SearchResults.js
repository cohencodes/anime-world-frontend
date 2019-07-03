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
    this.setState({
      showData,
      showDetailPage: true,
      isLoading: false
    });
    this.props.getTitle(showData.title);
  };

  render() {
    const { videoResults, recs } = this.props;
    const { isLoading, showDetailPage, showData } = this.state;
    let showList;
    let title;
    if (recs) {
      showList = recs.map(show => {
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
    }
    if (this.props.location !== undefined) {
      const {
        showResults,
        videoResults,
        showTitle
      } = this.props.location.state;
      title = showTitle;
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
    }
    return (
      <section className="search-results">
        {!showDetailPage ? (
          <>
            {/* this is so the search again button does not show up on recommendation renders */}
            {!recs && (
              <>
                <Link to="/search" className="link_button_search">
                  Search Again
                </Link>
              </>
            )}
            {title && (
              <h1 className="results_title">
                Showing Results for{' '}
                {title
                  .split(' ')
                  .map(word => word[0].toUpperCase() + word.slice(1))
                  .join(' ')}
              </h1>
            )}
            <ul className="show-list">{showList}</ul>
          </>
        ) : null}
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
