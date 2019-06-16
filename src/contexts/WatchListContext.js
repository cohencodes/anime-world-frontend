import React, { Component } from 'react';

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

  setWatchList = articleList => {
    this.setState({ articleList });
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
      setWatchList: this.setWatchList
    };
    return (
      <WatchListContext.Provider value={value}>
        {this.props.children}
      </WatchListContext.Provider>
    );
  }
}
