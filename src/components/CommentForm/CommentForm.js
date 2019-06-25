import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import ForumApiService from '../../services/forum-api-service';

class CommentForm extends Component {
  state = {
    user_name: '',
    comment: '',
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

    ForumApiService.postComment(comment, title);
  };

  render() {
    const { error } = this.state;
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CommentForm;
