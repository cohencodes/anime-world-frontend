import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comments from '../Comments/Comments';
import ForumApiService from '../../services/forum-api-service';

class Forum extends Component {
  state = {
    deleteComment: false,
    editComment: false
  };
  handleEditComment = (id, newComment) => {
    // TODO: add input button to comment component
    // functionality for editing comments
    console.log('edit comment', id, newComment);
  };

  handleDeleteComment = async id => {
    await ForumApiService.deleteComment(id);
    this.setState({ deleteComment: true });
  };
  render() {
    const { comments } = this.props;
    return (
      <section>
        <h1>Comments</h1>
        <FontAwesomeIcon icon="comment" color="#ab24a1" size="lg" />
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
