import React, { Component } from 'react';
import JikanApiService from '../../services/jikan-api-service';
import LandingInfo from '../LandingInfo/LandingInfo';
import SearchResults from '../SearchResults/SearchResults';
import YouTubeApiService from '../../services/youtube-api-service';
import './LandingPage.css';

class LandingPage extends Component {
  state = {
    recommendations: [],
    vids: [],
    isLoading: true
  };

  componentDidMount = () => {
    this.getShows();
    this.getVids();
  };

  getShows = async () => {
    const recommendations = await JikanApiService.getTopRecommendedShows();

    this.setState({ recommendations, isLoading: false });
  };

  getVids = async () => {
    const vids = await YouTubeApiService.getVideos();

    this.setState({ vids, isLoading: false });
  };

  render() {
    const { recommendations, vids, isLoading } = this.state;
    return (
      <>
        <h1 className="banner">AnimeWorld</h1>
        <LandingInfo />
        {!isLoading ? (
          <>
            <h2>Discover Top Anime</h2>
            <SearchResults showResults={recommendations} videoResults={vids} />
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

export default LandingPage;
