import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import ForumApiService from '../../services/forum-api-service';
import './CommentForm.css';
import TokenService from '../../services/token-service';

class CommentForm extends Component {
  state = {
    user_name: '',
    comment: '',
    comment_posted: false,
    error: null
  };

  componentDidUpdate = () => {
    const { comment_posted } = this.state;
    if (comment_posted) {
      this.props.handleUpdateComments();
    }
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    const { title } = this.props;

    if (TokenService.hasAuthToken()) {
      ForumApiService.postComment(comment, title);
      this.setState({ comment_posted: true });
    } else {
      this.setState({
        error: 'You must sign up or sign in first'
      });
    }
  };

  render() {
    const { error, comment_posted } = this.state;
    return (
      <form className="comment_form" onSubmit={this.handleSubmit}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>
        <label htmlFor="user_name">
          <FontAwesomeIcon icon="comment" color="#ab24a1" size="lg" /> Comment{' '}
        </label>
        <input
          type="text"
          name="comment"
          id="comment"
          value={this.state.comment}
          onChange={this.handleChange}
          placeholder="comment"
          required
        />
        <button type="submit" className="submit">
          Submit
        </button>
        {comment_posted ? (
          <FontAwesomeIcon icon="check-circle" color="#ab24a1" size="3x" />
        ) : null}
      </form>
    );
  }
}

export default CommentForm;
