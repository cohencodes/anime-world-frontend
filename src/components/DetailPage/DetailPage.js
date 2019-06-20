import React, { Component } from 'react';
import WatchListService from '../../services/watchlist-api-service';

class DetailPage extends Component {
  state = {
    error: null
  };

  addToWatchList = show => {
    WatchListService.addToWatchList(show);
  };

  render() {
    const { showData } = this.props;
    return (
      <>
        <h1>{showData.title}</h1>
        <img src={showData.image_url} alt={showData.title} />
        <section>
          <h3>About This Show</h3>
          <p>
            {showData.synopsis}{' '}
            <a href={showData.url} target="_blank" rel="noopener noreferrer">
              more
            </a>
          </p>
          <h4>Details</h4>
          <p>SCORE: {showData.score}</p>
          <p>
            Currently Airing:{' '}
            {showData.airing ? <span>Yes</span> : <span>No</span>}
          </p>
          <p>Episodes: {showData.episodes}</p>
          <p>Rated: {showData.rated}</p>
        </section>
        <button onClick={() => this.addToWatchList(showData)}>
          Add To My WatchList
        </button>
        <section>
          <header>
            <h3>Trailers & Clips</h3>
          </header>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
        </section>
        <section>
          <header>
            <h3>You may also like</h3>
          </header>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
        </section>
      </>
    );
  }
}

export default DetailPage;
