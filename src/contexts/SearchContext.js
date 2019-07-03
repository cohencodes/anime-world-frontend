import React, { Component } from 'react';

const SearchContext = React.createContext({
  shows: [],
  videos: [],
  characters: [],
  recs: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setArticleList: () => {}
});
export default SearchContext;

export class ArticleListProvider extends Component {
  state = {
    articleList: [],
    error: null
  };

  setArticleList = articleList => {
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
      articleList: this.state.articleList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArticleList: this.setArticleList
    };
    return (
      <SearchContext.Provider value={value}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}
