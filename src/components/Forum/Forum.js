import React, { Component } from 'react';
import Comments from '../Comments/Comments';
import ForumApiService from '../../services/forum-api-service';
import './Forum.css';

class Forum extends Component {
  state = {
    deleteComment: false,
    editComment: false
  };
  handleEditComment = (id, newComment) => {
    // TODO: add input button to comment component
    // TODO: functionality for editing comments
    console.log('edit comment', id, newComment);
  };

  handleDeleteComment = async id => {
    await ForumApiService.deleteComment(id);
    this.setState({ deleteComment: true });
  };
  render() {
    const { comments } = this.props;
    return (
      <section className="forum_container">
        <h1>Comments</h1>
        <ul>
          <Comments
            comments={comments}
            edit={this.handleEditComment}
            remove={this.handleDeleteComment}
          />
        </ul>
      </section>
    );
  }
}

export default Forum;
