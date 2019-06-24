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
            <p>
              <span className="bold">SCORE:</span>{' '}
              <span className="p_detail">{showData.score}</span>
            </p>
            <p>
              <span className="bold">Currently Airing:</span>{' '}
              {showData.airing ? (
                <span className="p_detail">Yes</span>
              ) : (
                <span className="p_detail">No</span>
              )}
            </p>
            <p>
              <span className="bold">Episodes:</span>{' '}
              <span className="p_detail">{showData.episodes}</span>
            </p>
            <p>
              <span className="bold">Rated:</span>{' '}
              <span className="p_detail">{showData.rated}</span>
            </p>
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
