import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    const { showResults } = this.props;

    return (
      <>
        <header role="banner">
          <h1>Search Results</h1>
        </header>
        <section>
          {showResults.map(show => {
            return (
              <>
                <img src={show.image_url} alt={show.image_url} />
                <button>Add to Watchlist</button>
                <button>View Details</button>
              </>
            );
          })}
        </section>
      </>
    );
  }
}

export default SearchResults;
