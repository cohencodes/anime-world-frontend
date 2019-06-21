import React, { Component } from 'react';
import WatchListService from '../services/watchlist-api-service';

const WatchListContext = React.createContext({
  watchList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setWatchList: () => {}
});

export default WatchListContext;

export class WatchListProvider extends Component {
  state = {
    watchList: [],
    error: null
  };

  setWatchList = () => {
    const watchList = WatchListService.getWatchList();
    this.setState({ watchList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      watchList: this.state.watchList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setWatchList: this.state.watchList
    };
    return (
      <WatchListContext.Provider value={value}>
        {this.props.children}
      </WatchListContext.Provider>
    );
  }
}
