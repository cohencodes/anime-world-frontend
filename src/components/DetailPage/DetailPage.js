import React, { Component } from 'react';
import YouTubeVideos from '../YouTubeVideos/YouTubeVideos';
import TokenService from '../../services/token-service';
import CommentForm from '../../components/CommentForm/CommentForm';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import config from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import './DetailPage.css';

class DetailPage extends Component {
  state = {
    addedToWatchlist: false,
    error: null
  };

  addToWatchList = show => {
    if (TokenService.hasAuthToken()) {
      const authToken = TokenService.getAuthToken();
      const decoded = jwtDecode(authToken);
      axios({
        method: 'post',
        url: `${config.API_ENDPOINT}/watchlist`,
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`,
          'content-type': 'application/json'
        },
        data: {
          user_id: decoded.user_id,
          title: show.title,
          image_url: show.image_url
        }
      })
        .then(res => {
          this.setState({ addedToWatchlist: true });
          return res;
        })
        .catch(error => {
          this.setState({ error: error.response.data.error });
        });
    } else {
      this.setState({
        error: 'You must sign up or sign in first'
      });
    }
  };

  render() {
    const { showData, videoResults } = this.props.location.state;
    const { error, addedToWatchlist } = this.state;
    return (
      <>
        <section className="detail_container">
          <h1>{showData.title}</h1>
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
          <div role="alert">
            {error && (
              <p className="error">
                {error} <Emoji symbol="😃" />
              </p>
            )}
          </div>
          <button onClick={() => this.addToWatchList(showData)}>
            Add To My WatchList
          </button>
          {addedToWatchlist ? (
            <FontAwesomeIcon icon="check-circle" color="#ab24a1" size="3x" />
          ) : null}
          <p className="synopsis">
            {showData.synopsis}
            <a href={showData.url} target="_blank" rel="noopener noreferrer">
              {' '}
              more
            </a>
          </p>
        </section>
        <CommentForm title={showData.title} />
        <YouTubeVideos videoResults={videoResults} />
      </>
    );
  }
}

export default DetailPage;
