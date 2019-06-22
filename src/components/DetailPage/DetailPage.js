import React, { Component } from 'react';
import WatchListService from '../../services/watchlist-service';
import YouTubeVideos from '../YouTubeVideos/YouTubeVideos';
import './DetailPage.css';

class DetailPage extends Component {
  state = {
    error: null
  };

  addToWatchList = show => {
    WatchListService.addToWatchList(show);
  };

  render() {
    const { showData, videoResults } = this.props;
    return (
      <>
        <h1>{showData.title}</h1>
        <section className="grid-container">
          <img src={showData.image_url} alt={showData.title} />
          <div className="details">
            <h4>Details</h4>
            <p>SCORE: {showData.score}</p>
            <p>
              Currently Airing:{' '}
              {showData.airing ? <span>Yes</span> : <span>No</span>}
            </p>
            <p>Episodes: {showData.episodes}</p>
            <p>Rated: {showData.rated}</p>
          </div>
          <button onClick={() => this.addToWatchList(showData)}>
            Add To My WatchList
          </button>
          <p>
            {showData.synopsis}
            <a href={showData.url} target="_blank" rel="noopener noreferrer">
              more
            </a>
          </p>
        </section>
        <YouTubeVideos videoResults={videoResults} />
      </>
    );
  }
}

export default DetailPage;
