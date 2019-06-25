import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comments from '../Comments/Comments';

class Forum extends Component {
  render() {
    const { comments } = this.props;
    return (
      <section>
        <h1>Comments</h1>
        <FontAwesomeIcon icon="comment" color="#ab24a1" size="lg" />
        <ul>
          <Comments comments={comments} />
        </ul>
      </section>
    );
  }
}

export default Forum;
