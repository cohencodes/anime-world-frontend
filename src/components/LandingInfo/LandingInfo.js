import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LandingInfo.css';

const LandingInfo = () => {
  return (
    <>
      <div className="landing_info">
        <h1>AnimeWorld</h1>
        <section>
          <FontAwesomeIcon icon="search" color="#ab24a1" size="3x" />{' '}
          <h3>Find New Shows, Get Recommendations.</h3>
          <p>
            Say Hello to new shows and characters, all the time. You'll even get
            personal recommendations on what to watch next, and stay up to date
            on new releases.
          </p>
        </section>
        <section>
          <FontAwesomeIcon icon="sticky-note" color="#ab24a1" size="3x" />{' '}
          <h3>Create Watchlists & Track Your Shows</h3>
          <p>
            Find a show you want to watch? Want to save it for later? Just add
            it to your WatchList. Share your list with your friends and keep
            track of your progress on any show you're currently watching.
          </p>
        </section>
        <section>
          <FontAwesomeIcon icon="info-circle" color="#ab24a1" size="3x" />{' '}
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
};

export default LandingInfo;
