import React, { Component } from 'react';
import './WatchListForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WatchListService from '../../services/watchlist-service';

class WatchListForm extends Component {
  state = {
    editClicked: false,
    episode_number: '',
    error: null
  };

  handleEditClick = () => {
    this.setState({ editClicked: !this.state.editClicked });
  };

  handleChangeEpisode = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleDeleteShow = () => {
    const { title } = this.props;

    WatchListService.deleteFromWatchList(title);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { episode_number } = this.state;

    const data = {
      title: this.props.title,
      episode_number
    };

    WatchListService.changeEpisodeNumber(data);
    window.location.reload();
  };
  render() {
    const { editClicked } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="watchlist_form">
          {editClicked ? (
            <div>
              <button onClick={this.handleEditClick}>
                <FontAwesomeIcon icon="edit" color="#6DB65B" size="sm" /> Edit{' '}
              </button>
              <label htmlFor="episode_number" />
              <input
                type="text"
                name="episode_number"
                id="episode_number"
                value={this.state.episode_number}
                onChange={this.handleChangeEpisode}
                placeholder="episode number..."
              />
              <button type="submit">Confirm</button>
            </div>
          ) : (
            <button onClick={this.handleEditClick}>
              {' '}
              <FontAwesomeIcon
                icon="edit"
                color="#6DB65B"
                size="sm"
              /> Edit{' '}
            </button>
          )}
          <button type="submit" onClick={this.handleDeleteShow}>
            {' '}
            <FontAwesomeIcon icon="trash-alt" color="#6DB65B" size="sm" />{' '}
            Delete{' '}
          </button>
        </form>
      </>
    );
  }
}

export default WatchListForm;
