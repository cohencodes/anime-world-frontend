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
    isLoading: true,
    showLandingInfo: true
  };

  componentDidMount = () => {
    this.getShows();
  };

  getShows = async () => {
    const recommendations = await JikanApiService.getTopRecommendedShows();

    this.setState({ recommendations, isLoading: false });
  };

  getVids = async title => {
    const vids = await YouTubeApiService.getVideos(title);

    this.setState({ vids, isLoading: false, showLandingInfo: false });
  };

  getTitle = title => {
    this.getVids(title);
  };

  render() {
    const { recommendations, vids, isLoading, showLandingInfo } = this.state;
    return (
      <>
        <h1 className="banner">AnimeWorld</h1>
        {showLandingInfo ? <LandingInfo /> : null}
        {!isLoading ? (
          <>
            <h2>Discover Top Anime</h2>
            <SearchResults
              recs={recommendations}
              videoResults={vids}
              getTitle={this.getTitle}
            />
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

export default LandingPage;
