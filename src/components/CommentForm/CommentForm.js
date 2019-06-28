import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ForumApiService from '../../services/forum-api-service';
import TokenService from '../../services/token-service';
import Comments from '../Comments/Comments';
import Emoji from '../Emoji/Emoji';
import './CommentForm.css';

class CommentForm extends Component {
  state = {
    user_name: '',
    comment: '',
    comment_posted: false,
    error: null
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
      this.setState({ comment_posted: true, comment: '' });
    } else {
      this.setState({
        error: 'You must sign up or sign in first'
      });
    }
  };

  render() {
    const { error, comment_posted } = this.state;
    const { title } = this.props;
    return (
      <section>
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
            placeholder={`say something about ${this.props.title}`}
            required
          />
          <button type="submit" className="submit">
            Submit
          </button>
          {comment_posted ? (
            <FontAwesomeIcon
              icon="check-circle"
              color="#ab24a1"
              size="3x"
              id="checkmark"
            />
          ) : null}
        </form>
        <Comments title={title} commentPosted={comment_posted} />
      </section>
    );
  }
}

export default CommentForm;
