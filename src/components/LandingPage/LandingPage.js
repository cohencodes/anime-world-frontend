import React, { Component } from 'react';
import Header from '../Header/Header';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import JikanApiService from '../../services/jikan-api-service';

class LandingPage extends Component {
  state = {
    recommendations: []
    // isLoading: true
  };

  // componentDidMount = () => {
  //   this.getShows();
  // };

  // getShows = () => {
  //   JikanApiService.getTopRecommendedShows().then(recommendations => {
  //     this.setState({ recommendations, isLoading: false });
  //   });
  // };

  render() {
    const { recommendations } = this.state;
    return (
      <>
        <Header />
        <div className="landing_page">
          <section>
            <FontAwesomeIcon icon="search" color="#6DB65B" size="3x" />{' '}
            <h3>Find New Shows, Get Personal Recommendations.</h3>
            <p>
              Say Hello to new shows and characters, all the time. You'll even
              get personal recommendations on what to watch next, and stay up to
              date on new releases.
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon="sticky-note" color="#6DB65B" size="3x" />{' '}
            <h3>Create Watch Lists & Track Your Shows</h3>
            <p>
              Find a show you want to watch? Want to save it for later? Just add
              it to your WatchList. Share your list with your friends and keep
              track of your progress on any show you're currently watching.
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon="info-circle" color="#6DB65B" size="3x" />{' '}
            <h3>Show Ratings, YouTube Clips, User Reviews.</h3>
            <p>
              On AnimeWorld you can search for any anime show and get trailer
              clips and other show information like user reviews, show ratings,
              episode counts, and more!
            </p>
          </section>
        </div>
      </>
    );
  }
}

export default LandingPage;
