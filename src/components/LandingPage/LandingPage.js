import React, { Component } from 'react';
import Header from '../Header/Header';
import JikanApiService from '../../services/jikan-api-service';
import LandingInfo from '../LandingInfo/LandingInfo';
import SearchResults from '../SearchResults/SearchResults';
import YouTubeApiService from '../../services/youtube-api-service';

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

    this.setState({ recommendations });
  };

  getVids = async () => {
    const vids = await YouTubeApiService.getVideos();

    this.setState({ vids, isLoading: false });
  };

  render() {
    const { recommendations, vids, isLoading } = this.state;
    return (
      <>
        <Header />
        {!isLoading ? (
          <>
            <h2>Discover Top Anime</h2>
            <SearchResults showResults={recommendations} videoResults={vids} />
          </>
        ) : (
          <h3>Loading...</h3>
        )}
        <LandingInfo />
      </>
    );
  }
}

export default LandingPage;
