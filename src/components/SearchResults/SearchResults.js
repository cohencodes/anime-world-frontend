import React, { Component } from 'react';
import DetailPage from '../DetailPage/DetailPage';
import './SearchResults.css';
import config from '../../config';
import axios from 'axios';
import TokenService from '../../services/token-service';

class SearchResults extends Component {
  state = {
    showDetailPage: false,
    showData: {},
    comments: [],
    isLoading: true
  };

  renderDetailPage = (showData, comments) => {
    this.setState({
      showData,
      comments,
      showDetailPage: true,
      isLoading: false
    });
  };

  getComments = show => {
    const { title } = show;
    axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/forum/${title}`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(res => {
        this.renderDetailPage(show, res.data);
      })
      .catch(error => error.response.data.errors);
  };

  handleUpdateComments = () => {
    const { showData } = this.state;
    this.getComments(showData);
  };

  render() {
    const { showResults, videoResults, recs } = this.props;
    const { isLoading, showDetailPage, showData, comments } = this.state;
    let showList;
    if (recs) {
      showList = recs.map(show => {
        return (
          <li key={show.mal_id}>
            <img src={show.image_url} alt={show.image_url} />
            <p>{show.title}</p>
            <button onClick={() => this.getComments(show)}>View Details</button>
          </li>
        );
      });
    }
    showList = showResults.map(show => {
      return (
        <li key={show.mal_id}>
          <img src={show.image_url} alt={show.image_url} />
          <p className="show_title">{show.title.slice(0, 19)} ...</p>
          <button onClick={() => this.getComments(show)}>View Details</button>
        </li>
      );
    });

    return (
      <section className="search-results">
        {!showDetailPage ? <ul className="show-list">{showList}</ul> : null}
        {showDetailPage ? (
          !isLoading ? (
            <DetailPage
              showData={showData}
              videoResults={videoResults}
              comments={comments}
              handleUpdateComments={this.handleUpdateComments}
            />
          ) : (
            <h3>Loading...</h3>
          )
        ) : null}
      </section>
    );
  }
}

export default SearchResults;
