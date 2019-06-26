import React, { Component } from 'react';
import './WatchListForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WatchListService from '../../services/watchlist-service';

class WatchListForm extends Component {
  state = {
    editClicked: false,
    episode_number: '',
    dataChanged: false,
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
    const { title, handleDataChanged } = this.props;

    WatchListService.deleteFromWatchList(title);
    handleDataChanged();
  };

  handleSubmit = event => {
    event.preventDefault();
    const { episode_number } = this.state;
    const { title, handleDataChanged } = this.props;
    const { episode_number: ep_num } = event.target;

    const data = {
      title,
      episode_number
    };

    WatchListService.changeEpisodeNumber(data);

    if (ep_num) {
      ep_num.value = '';
    }
    handleDataChanged();
    this.handleEditClick();
  };

  render() {
    const { editClicked } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="watchlist_form">
          {editClicked ? (
            <div>
              <button onClick={this.handleEditClick}>
                <FontAwesomeIcon icon="edit" color="#ab24a1" size="sm" /> Edit{' '}
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
                color="#ffffff"
                size="sm"
              /> Edit{' '}
            </button>
          )}
          <button type="submit" onClick={this.handleDeleteShow}>
            {' '}
            <FontAwesomeIcon icon="trash-alt" color="#ffffff" size="sm" />{' '}
            Delete{' '}
          </button>
        </form>
      </>
    );
  }
}

export default WatchListForm;
